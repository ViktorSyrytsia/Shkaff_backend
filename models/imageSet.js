const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    link: String
});

const imageSetSchema = new Schema({
    images: [imageSchema]
});

module.exports =  mongoose.model('ImageSet', imageSetSchema);
