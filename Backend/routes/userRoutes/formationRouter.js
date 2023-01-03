const router = require('express').Router()
const {
  addFormation,
  updateFormation,
  deleteFormation,
} = require('../../controllers/userControllers/formationController')

// Error Handler
const { tryCatch } = require('../../middleware/tryCatch')
const { errorHandler } = require('../../middleware/errorHandler')
const upload = require('../../outils/imageUpload')

router.post('/add-formation', upload.single('images'), tryCatch(addFormation))
router.put('/update-formation/:id', upload.single('images'), tryCatch(updateFormation))
router.delete('/delete-formation/:id', tryCatch(deleteFormation))

router.use(errorHandler)

module.exports = router