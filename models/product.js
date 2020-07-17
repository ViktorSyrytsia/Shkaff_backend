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
        s: String,
        m: String,
        l: String,
        xl: String,
        xxl: String,
    },
    description: String,
    price: Number,
    images: Array,
    rating: Array
});

export default model('Product', productSchema);
