const mongooose = require('mongoose')

const paintSchema = new mongooose.Schema({
    name: {
        type: String,
        required: [true, "Name Required"]
    },
    hex: {
        type: String,
        required: [true, "Hex Required"]
    },
    r: {
        type: String,
        required: [true, "R Value Required"]
    },
    g: {
        type: String,
        required: [true, "Green Value Required"]
    },
    b: {
        type: String,
        required: [true, "Blue Value Required"]
    },
    inStock: {
        type: String,
    },
    reStock: {
        type: String,
    }
})