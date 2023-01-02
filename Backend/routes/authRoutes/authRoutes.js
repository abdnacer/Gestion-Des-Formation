const router = require('express').Router()

const {
  loginUser,
} = require('../../controllers/authControllers/authController')

router.get('/login', loginUser)
// router.get('/logout')

module.exports = router