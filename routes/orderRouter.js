const router = require('express').Router();
const Order = require('../models/order');


router.post('/', (req, res) => {
    console.log(req.body);
    let order = new Order();
    order.user = req.body.user;
    order.date = new Date();
    order.total = req.body.total;
    order.items = req.body.items;
    order.save()
});


module.exports = router;