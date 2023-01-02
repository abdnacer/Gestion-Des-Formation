const router = require('express').Router()

router.get('/formation', (req, res) => {
  res.send('Formation')
})

module.exports = router