const Router = require('express')
const images = require('./controllers')

const router = Router()

router.get('/images', images.getImages)

router.get('/images/:id', images.getImage)

module.exports = router
