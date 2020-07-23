import { Schema, model } from 'mongoose';

const purchaseSchema = new Schema({
    user: {
        name: String,
        surname: String,
        email: String,
        phone: String,
    },
    delivery: {
        method: String,
        city: String,
        postOffice: String,
        address: {
            street: String,
            built: String,
            apartment: String,
        }
    },
    products: [Object],
    connectionMethod: String,
    createdAt: { type: Date, default: new Date(2012, 6, 4) },
    status: {type: String, default: 'processing'}
});

export default model('Purchase', purchaseSchema);
