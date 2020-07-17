import {Schema, model} from'mongoose';

const categorySchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    subcategories: {type: Array}
});

export default model('Category', categorySchema);
