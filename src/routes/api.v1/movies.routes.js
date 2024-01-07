const { list, detail } = require('../../controllers/moviesController')
const router = require('express').Router()

/* /api/v1/movies */

router.get('/', list)
router.get('/:id', detail)

module.exports = router