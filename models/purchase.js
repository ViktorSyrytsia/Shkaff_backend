import {Schema, model} from 'mongoose';

const purchaseSchema = new Schema({
    user: {
        name: {type: String, required: true},
        surname: {type: String, required: true},
        email: {type: String, required: true},
        phone: {type: String, required: true},
    },
    connectionMethod: String,
    deliveryMethod: {
        method: {type: String, required: true},
        city: String,
        postOffice: Number,
        address: {
            street: String,
            built: Number,
            apartment: Number,
        }
    }
});

export default model('Purchase', purchaseSchema);
