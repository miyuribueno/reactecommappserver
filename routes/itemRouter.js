const router = require('express').Router();
const Item = require('../models/item');



router.get('/all', (req,res)=> {
    Item.find({})     
    .then(items => {
        res.send(items);
    })

});

router.post('/filter', (req,res)=> {
    // console.log(req.body)
    let name;
    if(req.body.price) {
        name = "price"
    } else {
        name = "anime"
    }
    let priceFilter;

    if(name == "price"){
        priceFilter = req.body[name];
    }
    
    if(name == "price"){
        if(req.body[name] === 'lte'){
            console.log(name)
            Item.find({
                [name]: {$lte: 1000}
            })     
            .then(items => {
                res.send(items);
            })
        } else {
            Item.find({
                [name]: {$gte: 1000}
            })     
            .then(items => {
                res.send(items);
            })
        }
    }else {
        Item.find({
            [name]: req.body[name]
        })     
        .then(items => {
            res.send(items);
        })
    }
});

router.post('/addItem', (req,res)=> {
        console.log(req.body)
        let item = Item.findOne({
            name: req.body.name
        })
        .then(item => {
            if(item){
                res.send({error: "Item already exists"})
            }else {
                let newItem = new Item();
                newItem.name = req.body.name;
                newItem.price = req.body.price;
                newItem.image = req.body.image;
                newItem.description = req.body.description;
                newItem.anime = req.body.anime;
                newItem.save()
                .then(newItem => res.send(newItem));
            }
        })
});

router.put('/editItem/:id', (req,res)=>{
    console.log(req.body)
    Item.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err,data)=> {
        if(err) throw err;

        res.send(data);
    })
})

router.delete('/deleteItem/:id', (req,res)=> {
    console.log(req.params.id)
    Item.findByIdAndRemove(req.params.id, (err,data)=> {
        if(err)throw err;
        
        res.send(data);
    })
});



module.exports = router;