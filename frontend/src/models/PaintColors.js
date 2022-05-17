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
})