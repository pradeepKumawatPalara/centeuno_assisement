const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    item_name: {
        type: String,
        required: true
    },
    item_image: {
        type: String,
        required: true
    },
    import_date: {
        type: String,
        required: true
    },
    expiration_date: {
        type: String,
        required: true
    },
    item_price: {
        type: Number,
        required: true
    },
    item_quantity: {
        type: Number,
        required: true
    },
    item_weight: {
        type: Number,
        required: true
    },
    item_tax: {
        type: Number,
        required: true
    },
    item_availability: {
        type: Boolean,
        required: true
    }
})


const product = mongoose.model('product', schema);

module.exports = product;