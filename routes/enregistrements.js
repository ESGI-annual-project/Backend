const {Enregistrement} = require('../models/enregistrement');
const express = require('express');
//const { Router } = require('express');
const router = express.Router();


router.get(`/`, async (req, res) =>{
    const enregistrementList = await Enregistrement.find();

    if(!enregistrementList) {
        res.status(500).json({success: false})
    }
    res.send(enregistrementList);
})

module.exports =router;
