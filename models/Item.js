const mongoose = require('mongoose') //orm to interact with mongodb db; can also use mongodb driver
const Schema = mongoose.Schema


// Create Schema
const ItemSchema = new Schema({
    //objects
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Item = mongoose.model('item', ItemSchema)