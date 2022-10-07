const {Appointement} = require('../models/appointment');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const appointmentList = await Appointement.find();

    if(!appointmentList) {
        res.status(500).json({success: false})
    }
    res.send(appointmentList);
})



module.exports =router;

