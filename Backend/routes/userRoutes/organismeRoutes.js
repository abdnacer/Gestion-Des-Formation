const router = require('express').Router()

router.get('/Organisme', (req, res) => {
  res.send('Organisme')
})

module.exports = router