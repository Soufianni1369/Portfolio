const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    reviewtext: String
});

module.exports = mongoose.model("Review", ReviewSchema);