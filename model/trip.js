const mongoose = require('mongoose');

const TripShema = new mongoose.Schema({
    trip: {
        type: String, 
        required: true,
    },
    date: {
        type: String,
        default: "none"
    },
},
    {
    timestamps: true,

    }
);

module.exports = mongoose.model("Trip", TripShema);