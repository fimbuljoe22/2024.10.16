const express = require('express')
const router = express.Router()
const Model = require('../models/filmModel')

router.post('/', async (req, res, next)=>{
    try {
        const response = Model.create(req.body)
        res.status(200).json(response)
    }
    catch (error) {
        
    }
})

module.exports = router