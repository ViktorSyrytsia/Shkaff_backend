import {Schema, model} from 'mongoose';

const deliverySchema = new Schema({
    method: String,
    city: String,
    postOffice: Number,
    address: {type: Schema.Types.ObjectID, ref: 'Address'}
});

export default model('Delivery', deliverySchema);
