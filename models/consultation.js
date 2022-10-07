const mongoose = require('mongoose');

const consultationSchema = mongoose.Schema({
    ordonance: {
        type: String,
        
    }

});

exports.Consultation = mongoose.model('Consultation', consultationSchema);