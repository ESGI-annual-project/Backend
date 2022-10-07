const {Consultation} = require('../models/consultation');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const consultationList = await Consultation.find();

    if(!consultationList) {
        res.status(500).json({success: false})
    }
    res.send(consultationList);
})


module.exports =router;