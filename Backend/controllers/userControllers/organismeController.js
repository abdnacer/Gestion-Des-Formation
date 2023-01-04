const Organisme = require('../../models/organisme')

const addOrganisme = async (req, res) => {
  const { name, ville, address, phone } = req.body

  if (name == '' || ville == '' || address == '' || phone == '') throw Error('Please Fill All The Fields')

  const phoneExists = await Organisme.findOne({ phone })

  if (phoneExists) throw Error('Déja already exists')

  const newOrganisme = {
    name: name,
    ville: ville,
    address: address,
    phone: phone
  }

  await Organisme.create(newOrganisme)
    .then(data => {
      res.send('Organisme Created')
    })
    .catch(err => {
      throw Error('Organisme Not Created')
    })
}

const getOrganisme = async (req, res) => {
  const allOrganisme = await Organisme.find()

  if (allOrganisme) res.send(allOrganisme)
  else throw Error('Data Organisme is found')
}

const updateOrganisme = async (req, res) => {
  const { name, ville, address, phone } = req.body
  const { id } = req.params

  if (name == '' || ville == '' || address == '' || phone == '') throw Error('Please Fill All The Fields')

  const editeOrganisme = {
    name: name,
    ville: ville,
    address: address,
    phone: phone
  }

  if (editeOrganisme) {
     await Organisme.findByIdAndUpdate({ _id: id} , {$set: editeOrganisme})
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        throw Error(err)
      })
  }
  else throw Error('Data Not Found')

}

const deleteOrganisme = async(req, res) => {
  const {id} = req.params

  const deleteDataOrganisme = await Organisme.findOneAndDelete({_id: id})
  if(deleteDataOrganisme) res.send('Organisme is Deleted')
  else throw Error('Data Organisme is Deleted')
}

module.exports = {
  addOrganisme,
  getOrganisme,
  updateOrganisme,
  deleteOrganisme
}