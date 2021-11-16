const mongoose = require('mongoose');

// schema de donnees pour les Usagers
// _id, nom, email, password, roles
let schemaUsager = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    roles: {
        type: Object,
        required: true
    }
});

let Usagers = module.exports = mongoose.model('Usagers', schemaUsager);

// obtenir les Messages de la BD...
module.exports.getUsagers = (callback, limit) => {
    Usagers.find(callback).limit(limit);
};
