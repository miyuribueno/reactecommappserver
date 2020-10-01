const router = require('express').Router();
const Cart = require('../models/cart');


router.post('/cart', (req,res)=> {
    // let user = User.findOne({
    //     username: req.body.username,
    // })
    // .then(user => {
    //     if(user){
    //         res.send({error: "Username already exists"})
    //     }else {
    //         if(err) return res.send({error: err})

    //         let newCart = new Cart();
    //         newUser.username = req.body.username;
    //         newUser.password = hash;
    //         newUser.role = 'regular';
    //         newUser.save()
    //         .then(newUser => res.send(newUser));
    //     }
    // })

});


module.exports = router;