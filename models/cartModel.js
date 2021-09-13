const mongoose = require('mongoose');

const cartItemsModelSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },


    productId: {
        type: String,
        require: true
    },
    productName: {
        type: String,
        require: true
    },
    productImage: {
        type: String,
        required: false
    },
    productPrice: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }





});

module.exports = mongoose.model('Cart', cartItemsModelSchema);