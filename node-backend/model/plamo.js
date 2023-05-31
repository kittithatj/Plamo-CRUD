const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let plamo = new Schema({
    name: {
        type: String
    },
    grade: {
        type: String
    },
    brand: {
        type: String
    },
    price: {
        type: String
    },

}, {
    collection: 'plamos'
})

module.exports = mongoose.model('plamo', plamo)