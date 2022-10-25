const express = require('express')
const router = express.Router()
const searchController = require('../app/controllers/SiteController')

router.use('/', searchController.search)
//router.use('/', siteController.index)
module.exports = router