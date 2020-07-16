import {Schema, model} from 'mongoose';

const categorySchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    subcategories: {type: Schema.Types.ObjectID, ref: 'Subcategory'},
});

export default model('Category', categorySchema);
