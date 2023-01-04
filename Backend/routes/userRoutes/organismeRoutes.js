const router = require('express').Router()
const {
  addOrganisme,
  getOrganisme,
  updateOrganisme,
  deleteOrganisme
} = require('../../controllers//userControllers/organismeController')

const { tryCatch } = require('../../middleware/tryCatch')
const {errorHandler } = require('../../middleware/errorHandler')

router.post('/add-organisme', tryCatch(addOrganisme))
router.get('/organisme', tryCatch(getOrganisme))
router.put('/update-organisme', tryCatch(updateOrganisme))
router.delete('/delete-organisme', tryCatch(deleteOrganisme))

app.use(errorHandler)

module.exports = router