const router = require('express').Router()
const {
  getDataEmploye,
  getDataHistorique,
  getDataEmployeFormation
} = require('../../controllers/userControllers/employeController')

const { tryCatch } = require('../../middleware/tryCatch')
const { errorHandler } = require('../../middleware/errorHandler')
const { userPermission } = require('../../middleware/permission')

router.get('/employe', userPermission, tryCatch(getDataEmploye))
router.get('/employe/historique', userPermission, tryCatch(getDataHistorique))
router.get('/employe/formation', userPermission, tryCatch(getDataEmployeFormation))

router.use(errorHandler)

module.exports = router