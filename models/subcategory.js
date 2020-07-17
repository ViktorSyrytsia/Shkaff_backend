import { Schema, model } from 'mongoose';

const subcategorySchema = new Schema({
    name: { type: String },
    categoryId: { type: Schema.Types.ObjectID }
});

export default model('Subcategory', subcategorySchema);
