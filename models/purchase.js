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
    }
});

export default model('Purchase', purchaseSchema);
