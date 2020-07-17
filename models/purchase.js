import { Schema, model } from 'mongoose';

const purchaseSchema = new Schema({
    user: {
        name: String,
        surname: String,
        email: String,
        phone: String,
    },
    connectionMethod: String,
    deliveryMethod: {
        method: String,
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
