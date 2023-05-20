const router = require('express').Router()
const {
  loginUser,
  logout
  // registerUser
} = require('../../controllers/authControllers/authController')


const { tryCatch } = require('../../middleware/tryCatch')
const { errorHandler } = require('../../middleware/errorHandler')
const { authPeremission, userPermission } = require('../../middleware/permission')


router.post('/login', tryCatch(loginUser))
router.get('/logout', userPermission, tryCatch(logout))
// router.post('/register', authPeremission, tryCatch(registerUser))

router.use(errorHandler)

module.exports = router