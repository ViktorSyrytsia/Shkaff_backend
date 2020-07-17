import {Schema, model} from 'mongoose';

const productSchema = new Schema({
    name: String,
    category: {
        type: Schema.Types.ObjectID,
        ref: 'Category'
    },
    subcategory: {
        type: Schema.Types.ObjectID,
        ref: 'Subcategory'
    },
    size: {
        type: Schema.Types.ObjectID,
        ref: 'Size'
    },
    description: String,
    price: Number,
    images: {
        type: Schema.Types.ObjectID,
        ref: 'ImageSet'
    },
    rating: Number
});

export default model('Product', productSchema);
