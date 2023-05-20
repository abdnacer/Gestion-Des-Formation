const User = require('../../models/users')
const Role = require('../../models/role')
const Formation = require('../../models/formation')
const Organisme = require('../../models/organisme')
const Historique = require('../../models/historique')
const Storage = require('local-storage')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const role = require('../../models/role')

const addEmploye = async (req, res) => {
  const role_id = await role.aggregate([{ $match: { name: "employe" } }]);
  const { first_name, last_name, phone, email, password, organisme } = req.body

  if (first_name == '' || last_name == '' || phone == '' || email == '' || password == '' || organisme == '') throw Error('Please Fill All The Fields')

  const userExists = await User.findOne({ email })
  const phoneExists = await User.findOne({ phone })

  if (userExists) throw Error('User already Exists')
  if (phoneExists) throw Error('Phone The user alrady Exists')

  const salt = await bcrypt.genSalt(10)
  const hash_password = await bcrypt.hash(password, salt)

  const addDataEmploye = {
    first_name: first_name,
    last_name: last_name,
    phone: phone,
    email: email,
    password: hash_password,
    role: role_id[0]._id,
    organisme: organisme
  }

  const employeCreated = await User.create(addDataEmploye)

  if (employeCreated) res.send('Employe is Created')
  else throw Error('User Not Created')
}

const getAdmin = async (req, res) => {
  const token = Storage('token')
  if (token) {
    const token_user = await jwt.verify(token, process.env.SECRET)
    if (token_user) {
      const user = await User.findById(token_user.id)
      if (user) {
        const role = await Role.findById(user.role)
        res.json({
          first_name: user.first_name,
          last_name: user.last_name,
          phone: user.phone,
          email: user.email,
          role: role.name
        })
      } else throw Error('Data User Not Found')
    } else throw Error('Verify Token and user found')
  } else throw Error('Token not Found')
}

const getDataUser = async (req, res) => {
  const id_role = await role.aggregate([{ $match: { name: "employe" } }]);

  const users = await User.find({ role: id_role })
    .populate({ path: 'organisme', model: Organisme })
    .populate({ path: 'formation', model: Formation })

  res.json({ users })
}

const updateDataUser = async (req, res) => {
  const { id } = req.params
  const { formation, organisme } = req.body

  if (formation == '' || organisme == '') throw Error('Please Fill All The Fields')

  const updateDataUser = {
    formation: formation,
    organisme: organisme
  }

  const user_data_update = await User.findByIdAndUpdate({ _id: id }, { $set: updateDataUser })

  if (user_data_update) {

    const addDataHistorique = {
      users: id,
      organisme: organisme,
      formation: formation
    }

    const getHistorique = await Historique.findOne({
      users: addDataHistorique.users,
      organisme: addDataHistorique.organisme,
      formation: addDataHistorique.formation
    })

    if (getHistorique) {
      res.status(401).send('Change The Content Of Input')
    }
    else {
      const story_data_historique = await Historique.create(addDataHistorique)
      if (story_data_historique) res.send('Update Success')
      else throw Error('Updated Not Success')
    }

  }
  else throw Error('Updated Not Success')
}

const getDataHistorique = async (req, res) => {
  const dataHistorique = await Historique.find()
    .populate({ path: 'users', model: User })
    .populate({ path: 'formation', model: Formation })
    .populate({ path: 'organisme', model: Organisme })

  if (dataHistorique) res.send(dataHistorique)
  else throw Error('Historique Not Found')
}

const statistiqueAdmin = async (req, res) => {
  const role_id = await role.aggregate([{ $match: { name: "admin" } }]);
  const idRole = role_id[0]._id

  const employe = await User.find({role: idRole}).count()
  const formation = await Formation.find().count()
  const organisme = await Organisme.find().count()
  res.send({employe, formation, organisme})

}

module.exports = {
  addEmploye,
  getAdmin,
  getDataUser,
  updateDataUser,
  getDataHistorique,
  statistiqueAdmin
}