import {Schema, model} from 'mongoose';

const productSchema = new Schema({
    name: {type: String, required: true},
    category: {type: String, required: true, ref: 'Category'},
    subcategory: {type: String, required: true, ref: 'Subcategory'},
    size: {
        s: Number,
        m: Number,
        l: Number,
        xl: Number,
        xxl: Number,
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
