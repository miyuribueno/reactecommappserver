const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.post('/signUp', (req,res)=> {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        let user = User.findOne({
            username: req.body.username,
        })
        .then(user => {
            if(user){
                res.send({error: "Username already exists"})
            }else {
                if(err) return res.send({error: err})

                let newUser = new User();
                newUser.username = req.body.username;
                newUser.password = hash;
                newUser.role = 'regular';
                newUser.save()
                .then(newUser => res.send(newUser));
            }
        })
    })
});

router.post('/signIn', async(req, res)=> {
    let user = await User.findOne({
        username: req.body.username
    });
    if(user){
        let match = await bcrypt.compare(req.body.password, user.password);
        if(match){
            res.send(user);
        }else {
            alert({error: "Invalid username/password"})
        }
    };
});


module.exports = router;