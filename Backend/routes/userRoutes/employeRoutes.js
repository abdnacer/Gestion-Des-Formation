const router = require('express').Router()

router.get('employe', (req, res) => {
  res.send('Employe')
})

module.exports = router