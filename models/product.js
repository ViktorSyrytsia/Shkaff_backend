import {Schema, model} from 'mongoose';

const productSchema = new Schema({
    name: {type: String, required: true},
    category: {type: String, required: true, ref: 'Category'},
    subcategory: {type: String, required: true, ref: 'Subcategory'},
    size: {
        s: {type: Number},
        m: {type: Number},
        l: {type: Number},
        xl: {type: Number},
        xxl: {type: Number},
    },
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: [
        {type: String, required: true},
        {
            type: String,
        },
        {
            type: String,
        },
        {
            type: String,
        },
        {
            type: String,
        }
    ],
    rating: Number
});

export default model('Product', productSchema);
