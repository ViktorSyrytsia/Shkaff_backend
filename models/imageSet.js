import {Schema, model} from'mongoose';

const imageSchema = new Schema({
    link: String
});

const imageSetSchema = new Schema({
    images: [imageSchema]
});

export default model('ImageSet', imageSetSchema);
