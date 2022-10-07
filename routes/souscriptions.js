const {Souscription} = require('../models/souscription');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const souscriptionList = await Souscription.find();

    if(!souscriptionList) {
        res.status(500).json({success: false})
    }
    res.send(souscriptionList);
})


module.exports =router;