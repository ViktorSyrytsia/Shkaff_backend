import { Schema, model } from 'mongoose';

const purchaseSchema = new Schema({
    user: {
        type: Schema.Types.ObjectID,
        ref: 'User'
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
