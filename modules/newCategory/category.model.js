import { Schema, model } from 'mongoose';

const CategorySchema = new Schema({
        name: String,
        images: String
});

export default model('Category', CategorySchema);