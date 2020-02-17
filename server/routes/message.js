const express = require('express')
const {createMessage} = require('../handlers/message')
const router = express.Router({mergeParams: true})

router.route('/')
    .post(createMessage)




module.exports = router;