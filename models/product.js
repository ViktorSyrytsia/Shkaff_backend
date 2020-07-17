import {Schema, model} from 'mongoose';

const productSchema = new Schema({
    name: String,
    category: {type: String, ref: 'Category'},
    subcategory: {type: String, ref: 'Subcategory'},
    size: {
        s: Number,
        m: Number,
        l: Number,
        xl: Number,
        xxl: Number,
    },
    description: String,
    price: Number,
    images: [
       String,
       String,
       String,
       String,
       String
    ],
    rating: Number
});

export default model('Product', productSchema);
