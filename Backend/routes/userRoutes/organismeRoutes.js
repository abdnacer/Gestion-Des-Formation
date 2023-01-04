const router = require('express').Router()
const {
  addOrganisme,
  getOrganisme,
  updateOrganisme,
  deleteOrganisme
} = require('../../controllers//userControllers/organismeController')

const { tryCatch } = require('../../middleware/tryCatch')
const { errorHandler } = require('../../middleware/errorHandler')
const { userPermission } = require('../../middleware/permission')

router.post('/add-organisme', userPermission, tryCatch(addOrganisme))
router.get('/organisme', userPermission, tryCatch(getOrganisme))
router.put('/update-organisme/:id', userPermission, tryCatch(updateOrganisme))
router.delete('/delete-organisme/:id', userPermission, tryCatch(deleteOrganisme))

router.use(errorHandler)

module.exports = router