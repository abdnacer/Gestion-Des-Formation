const router = require('express').Router()
const {
  getDataEmploye
} = require('../../controllers/userControllers/employeController')

const { tryCatch } = require('../../middleware/tryCatch')
const { errorHandler } = require('../../middleware/errorHandler')
const { userPermission } = require('../../middleware/permission')

router.get('/employe', userPermission, tryCatch(getDataEmploye))

router.use(errorHandler)

module.exports = router