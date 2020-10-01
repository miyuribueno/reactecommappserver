const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    user: String,
    date: Date,
    total: Number,
    items: Array
});

module.exports = mongoose.model('Order', OrderSchema);