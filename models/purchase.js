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
        postOffice: String,
        address: {
            street: String,
            built: String,
            apartment: String,
        }
    },
    createdAt: { type: Date, default: Date.now },
    status: {type: Boolean, default: false}
});

export default model('Purchase', purchaseSchema);
