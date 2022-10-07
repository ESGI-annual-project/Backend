const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }
});

exports.Appointement = mongoose.model('Appointment', appointmentSchema);