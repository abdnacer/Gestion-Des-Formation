const fs = require("fs")

const deleteFile = (image_name) => {

  const directoryPath = 'public/images/'

  try {
    fs.unlinkSync(directoryPath + image_name);
    console.log('Delete Formation');
  } catch (err) {
    console.log(err)
  }
};

module.exports = {
  deleteFile
}