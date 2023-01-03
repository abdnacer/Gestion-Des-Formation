const router = require('express').Router()
const {
  loginUser,
  logout
  // registerUser
} = require('../../controllers/authControllers/authController')


const { tryCatch } = require('../../middleware/tryCatch')
const { errorHandler } = require('../../middleware/errorHandler')


router.post('/login', tryCatch(loginUser))
router.get('/logout', tryCatch(logout))
// router.post('/register', tryCatch(registerUser))
// router.get('/logout')

router.use(errorHandler)

module.exports = router