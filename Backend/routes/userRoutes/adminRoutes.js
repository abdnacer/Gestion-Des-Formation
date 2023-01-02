const router = require('express').Router()

router.get('/admin', (req, res) => {
  res.send('Admin')
})

module.exports = router
