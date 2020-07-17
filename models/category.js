import {Schema, model} from'mongoose';

const categorySchema = new Schema({
    name: String,
    image: String,
    subcategories: Array
});

export default model('Category', categorySchema);
