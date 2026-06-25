const express = require('express');
const router = express.Router();
let merch = require('../../merch.json');

//GET all
router.get('/', (req, res) => {
    res.json(merch);
});


//GET Single Item
router.get('/', (req, res) => {
    const found = merch.some(merch => merch.id === req.params.id);
    if(found){
        res.json(merch.filter(merch => merch.id === req.params.id));
    } else {
        res.status(400).json({msg: `Item ${req.params.id} not found`});
    }
});


//POST - Create Item
router.post('/', (req, res) => {
    const newItem = {
        id : req.body.id,
        image : "/rightarrow.png",
        images : ["/rightarrow.png"],
        text: "Like Water - Backend Efition",
        description : "This page is currently under construction...",
        pageurl : "./merchpages/LWGKCD.html",
        funny : "3",
        price : "$14"
    }

    if(!newItem.id || (merch.some(item => newItem.id === item.id))){
        return res.status(400).json({msg:'Items must have a(n) (unique) id'});
    }

    merch.push(newItem);
    res.json({msg:'Item was added ', merch});
});

//PUT - Update Item
router.put('/:id', (req, res) => {
    const found = merch.some(merch => merch.id === req.params.id);
    if(found){
        const updateItem = req.body;
        merch.forEach(merch=>{
            if(merch.id===req.params.id){
                merch.id = updateItem.id ? updateItem.id : merch.id;
                merch.image = updateItem.image ? updateItem.image : merch.image;
                merch.images = updateItem.images ? updateItem.images : merch.images;
                merch.text= updateItem.text ? updateItem.text : merch.text;
                merch.description = updateItem.description ? updateItem.description : merch.description;
                merch.pageurl = updateItem.pageurl ? updateItem.pageurl : merch.pageurl;
                merch.funny = updateItem.funny ? updateItem.funny : merch.funny;
                merch.price = updateItem.price ? updateItem.price : merch.price;
                res.json({msg:'Item was updated', merch});
            }
        });
    } else {
        res.status(400).json({msg: `Item ${req.params.id} not found`});
    }
});

//Delete Item
router.delete('/:id', (req, res) => {
    const found = merch.some(merch => merch.id === req.params.id);
    if(found){
        merch = merch.filter(item => item.id !== req.params.id);
        res.json({msg: 'Item deleted', merch});
    } else {
        res.status(400).json({msg: `Item ${req.params.id} not found`});
    }
});

module.exports = router;