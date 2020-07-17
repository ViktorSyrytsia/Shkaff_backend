import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    phone: String,
});

export default model('User', userSchema);
