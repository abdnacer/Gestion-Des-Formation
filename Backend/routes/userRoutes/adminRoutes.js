const router = require('express').Router()
const {
  addEmploye,
  getAdmin,
  getDataUser,
  updateDataUser,
  getDataHistorique,
  statistiqueAdmin
} = require('../../controllers/userControllers/adminController')

const { tryCatch } = require('../../middleware/tryCatch')
const { errorHandler } = require('../../middleware/errorHandler')
const { userPermission } = require('../../middleware/permission')

router.post('/admin/add-employe',  tryCatch(addEmploye))
router.get('/admin', userPermission, tryCatch(getAdmin))
router.get('/admin/user',  tryCatch(getDataUser))
router.put('/admin/update-user/:id', userPermission, tryCatch(updateDataUser))
router.get('/admin/historique', userPermission, tryCatch(getDataHistorique))
router.get('/admin/statistique',  tryCatch(statistiqueAdmin))

router.use(errorHandler)

module.exports = router
