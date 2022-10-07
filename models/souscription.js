const mongoose = require('mongoose');

const souscriptionSchema = mongoose.Schema({
    souscriptionItems: {
        type: Boolean,

    }
});

exports.Souscription = mongoose.model('Souscription', souscriptionSchema);