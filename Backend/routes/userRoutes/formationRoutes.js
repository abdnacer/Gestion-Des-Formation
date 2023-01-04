const router = require('express').Router()
const {
  addFormation,
  getformation,
  updateFormation,
  deleteFormation,
} = require('../../controllers/userControllers/formationController')

// Error Handler
const { tryCatch } = require('../../middleware/tryCatch')
const { errorHandler } = require('../../middleware/errorHandler')
const upload = require('../../outils/imageUpload')
const { userPermission } = require('../../middleware/permission')

router.post('/add-formation', userPermission, upload.single('images'), tryCatch(addFormation))
router.get('/formation', userPermission, tryCatch(getformation))
router.put('/update-formation/:id', userPermission, upload.single('images'), tryCatch(updateFormation))
router.delete('/delete-formation/:id', userPermission, tryCatch(deleteFormation))

router.use(errorHandler)

module.exports = router