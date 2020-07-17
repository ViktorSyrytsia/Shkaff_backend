import {Schema, model} from 'mongoose';

const productSchema = new Schema({
    name: String,
    categoryId: {
        type: Schema.Types.ObjectID,
        ref: 'Category'
    },
    subcategoryId: {
        type: Schema.Types.ObjectID,
        ref: 'Subcategory'
    },
    sizes: {
        s: Number,
        m: Number,
        l: Number,
        xl: Number,
        xxl: Number,
    },
    description: String,
    price: Number,
    images: [Object],
    rating: [Object]
});

export default model('Product', productSchema);
