const mongoose = require('mongoose');

const enregistrementSchema = mongoose.Schema ({
    name: {
        type: String,
        required: true,
    }
});

exports.Enregistrement = mongoose.model('Enregistrement', enregistrementSchema);