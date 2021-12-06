const express = require('express')
const { model } = require('mongoose')
const router = express.Router()

// Item model
// bring in the item model //for making queries to find, save,etc
const Item = require('../../models/Item')

// 

// @route   GET api/items
// @desc    Get all items
// @access  Public (usually private. public because no authentication)

// instead of app.get() which we do in server.js file, we do router.get()
router.get('/', (req, res) => {
        //fetch all the items from db; there are none, but we can get empty array
        Item.find()
            .sort({
                date: -1 //descending; 1 for ascending
            })
            .then(items => res.json(items))
    })
    // only / in get() because if we hit the endpoint in http client[server.js -> app.use]
    //it represents the actual endpoint since we are using the router
    //if we server.js file then we would use app.get('api/items')

// 

// @route   POST api/items
// @desc    Create an item
// @access  Public (usually private. public because no authentication)
router.post('/', (req, res) => {
    // we want to construct an object to insert in the db
    const newItem = new Item({
            //Item is the name of the model
            name: req.body.name //name will come from the body of the request
        })
        // newItem memory is created in the memory and needs to be saved
    newItem.save()
        .then(item => RTCRtpSender.json(item))
})

// 

// @route   DELETE api/items/:id
// @desc    DELETE a item
// @access  Public (usually private. public because no authentication)
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id) // fetch id from uri
        .then(item => item.remove() //remove gives a promise too
            .then((() => res, json({ success: true })))
        )
        .catch(err => res.status(404)
            .json({ success: false })
        )
})


// export default router 
module.exports = router //or else no other file will read whats in it