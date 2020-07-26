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
        xs: Number,
        s: Number,
        m: Number,
        l: Number,
        xl: Number,
        xxl: Number,
    },
    description: String,
    price: Number,
    images: [Object],
    rating: [Object],
    createdAt: { type: Date, default: new Date() },
});

export default model('Product', productSchema);
