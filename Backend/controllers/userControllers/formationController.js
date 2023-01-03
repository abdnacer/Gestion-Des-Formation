const Formation = require('../../models/formation')
const fs = require('fs')

const addFormation = async (req, res) => {
  const { name, description, debut, fin } = req.body

  if (name == '' || description == '' || debut == '' || fin == '') throw Error('Please fill All The Fields')
  let array = []
  array.push(req.file.filename)
  const newFormation = {
    name: name,
    images: array,
    description: description,
    debut: debut,
    fin: fin
  }

  const isformfield = Object.values(newFormation).every(value => {
    if (value) {
      return true;
    }
    else {
      return false;
    }
  })

  if (isformfield) {
    await Formation.create(newFormation)
      .then(() => {
        res.send('Formation is Added')
      })
      .catch(err => {
        throw Error('Formation is Not Added')
      })
  }
  else throw Error('Invalid Data')
}

const updateFormation = async (req, res) => {
  const { name, description, debut, fin } = req.body
  const { id } = req.params

  if(name == '' || description == '' || debut == '' || fin == '' ) throw Error('Please Fill All The Fields')

  const updateFormation = {
    name: name,
    description: description,
    debut: debut,
    fin: fin,
    images: req.file.filename
  }
  if(updateFormation){
    await Formation.findByIdAndUpdate({_id: id}, updateFormation)
    .then(() => {
      res.send('Formation is Updated')
    })
    .catch(err => {
      throw Error(err)
    })
  }
}

const deleteFormation = async (req, res) => {
  const {id} = req.params
  try {
    const dataFormation = await Formation.findById(id)
    try {
      fs.unlinkSync(`C:/Users/Youcode/Desktop/MARHABA-DELIVRY/backend/images/${dataFormation.images[0]}`)
      res.send('delete Formation')
    } catch (error) {
      throw Error(error)
    }
  } catch (error) {
    throw Error(error)
  }
}

module.exports = {
  addFormation,
  updateFormation,
  deleteFormation,
}