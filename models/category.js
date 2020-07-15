import {Schema, model} from'mongoose';

const categorySchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    subcategories: [
        {
            name: String
        },
    ],
});

export default model('Category', categorySchema);
