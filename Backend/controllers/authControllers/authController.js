const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Storage = require('local-storage')

const User = require('../../models/users')
const Role = require('../../models/role')

// const registerUser = async (req, res) => {
//   const { first_name, last_name, phone, email, password } = req.body

//   const salt = await bcrypt.genSalt(10)
//   const pass_hash = await bcrypt.hash(password, salt)
//   const role = "63b276796b952e1c05514fc3"

//   const user = await User.create({
//     first_name,
//     last_name,
//     phone,
//     email,
//     password: pass_hash,
//     role,
//   })

//   // console.log(user)

//   if(user) res.send(user)
//   if(!user) throw Error ('Invalid User Data')
// }

const loginUser = async (req, res) => {
  const { email, password } = req.body

  if (email === '' || password === '') throw Error('Please Fill All The Fields')
  else {
    const user = await User.findOne({ email })
    if (!user) throw Error('Email or Password incorrect')
    const correctPassword = await bcrypt.compare(password, user.password)
    if (user && correctPassword) {
      const role = await getRoleById(user.role)
      const token = generateToken(user.id)
      Storage('token', token)
      res.json({
        id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        role: role.name,
        token: token
      })
    }
  }
}

const logout = async (req, res) => {
  Storage.clear()
  res.send('Your are Logout')
}

const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.SECRET, {
    expiresIn: "30d"
  })

  return token
}

const getRoleById = async (id) => {
  const role = await Role.findById({ _id: id });
  return role;
}

module.exports = {
  loginUser,
  logout,
  // registerUser
}