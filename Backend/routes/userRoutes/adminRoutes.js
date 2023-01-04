const router = require('express').Router()
const {
  addEmploye,
  getAdmin,
  getDataUser,
  updateDataUser
} = require('../../controllers/userControllers/adminController')

const { tryCatch } = require('../../middleware/tryCatch')
const { errorHandler } = require('../../middleware/errorHandler')
const { userPermission } = require('../../middleware/permission')

router.post('/admin/add-employe', userPermission, tryCatch(addEmploye))
router.get('/admin', userPermission, tryCatch(getAdmin))
router.get('/admin/user', userPermission, tryCatch(getDataUser))
router.put('/admin/update-user/:id', userPermission, tryCatch(updateDataUser))

router.use(errorHandler)

module.exports = router
