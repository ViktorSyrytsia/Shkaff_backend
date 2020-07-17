import {Schema, model} from 'mongoose';

const sizeSchema = new Schema({
    s: Number,
    m: Number,
    l: Number,
    xl: Number,
    xxl: Number,
});

export default model('Size', sizeSchema);
