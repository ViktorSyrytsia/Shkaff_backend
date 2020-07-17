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
    size: {
        s: String,
        m: String,
        l: String,
        xl: String,
        xll: String,
    },
    description: String,
    price: Number,
    images: Array,
    rating: Number
});

export default model('Product', productSchema);
