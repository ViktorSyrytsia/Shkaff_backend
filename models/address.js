import {Schema, model} from 'mongoose';

const addressSchema = new Schema({
    street: String,
    built: String,
    apartment: String,
});

export default model('Address', addressSchema);
