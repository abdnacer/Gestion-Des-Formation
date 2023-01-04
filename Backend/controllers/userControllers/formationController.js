const Formation = require('../../models/formation')
const fs = require('fs')
const {deleteFile} = require('../../outils/deleteFile')

const addFormation = async (req, res) => {
  const { name, description, debut, fin} = req.body
  const images = req.file.filename

  if (name == '' || description == '' || debut == '' || fin == '' ) throw Error('Please fill All The Fields')

  const newFormation = {
    name: name,
    description: description,
    debut: debut,
    fin: fin,
    images: images
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

const getformation = async (req, res) => {
  const allFormation = await Formation.find()

  if(allFormation) res.send(allFormation)
  else throw Error('Data Formation is Found')
}

const updateFormation = async (req, res) => {
  const { name, description, debut, fin } = req.body
  const { id } = req.params
  const images = req.file.filename

  if(name == '' || description == '' || debut == '' || fin == '' ) throw Error('Please Fill All The Fields')

  const updateFormation = {
    name: name,
    description: description,
    debut: debut,
    fin: fin,
    images: images
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


// C:\Users\Youcode\Desktop\Gestion-Des-Formation\Backend\public\images\
const deleteFormation = async (req, res) => {
  const { id } = req.params
  try {
    const result = await Formation.findById({ _id: id })
    deleteFile(result.images)
    await Formation.findOneAndDelete({ _id: id });
    res.send("Formation deleted");
  } catch (error) {
    throw new Error(error)
  }
}


module.exports = {
  addFormation,
  getformation,
  updateFormation,
  deleteFormation,
}