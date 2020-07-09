import {Schema, model} from 'mongoose';

const categorySchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true}
});

module.exports = model('Category', categorySchema);
