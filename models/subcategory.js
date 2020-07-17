import { Schema, model } from 'mongoose';

const subcategorySchema = new Schema({
    name: String,
    categoryId: Schema.Types.ObjectID
});

export default model('Subcategory', subcategorySchema);
