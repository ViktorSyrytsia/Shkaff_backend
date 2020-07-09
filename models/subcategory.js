import {Schema, model} from 'mongoose';

const subcategorySchema = new Schema({
    name: {type: String, required: true},
    categoryId: {type: Schema.Types.ObjectID, required: true}
});

module.exports = model('Subcategory', subcategorySchema);
