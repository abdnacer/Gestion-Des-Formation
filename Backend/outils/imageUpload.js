const path = require('path')
const multer = require('multer')

//destination file au niveau de image
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/images")
  },

  //override pour ajouter a new image cet function de rename fille 
  filename: (req, file, callback) => {
    const newImageName = Date.now() + path.extname(file.originalname)
    callback(null, newImageName)
  }
})

const fileFilter = (req, file, callback) => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
    callback(null, true)
  }
  else {
    const callback = callback(new Error("Please Upload 'JPEG' or 'PNG' Or 'JPG' file"))
    callback(callback, false)
  }
}

//exports storage configueation et filtrage de image 
const uploadImage = multer({
  storage: storage,
  fileFilter: fileFilter
})

module.exports = uploadImage