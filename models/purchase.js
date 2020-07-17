import { Schema, model } from 'mongoose';

const purchaseSchema = new Schema({
    user: {
        type: Schema.Types.ObjectID,
        ref: 'User'
    },
    connectionMethod: String,
    deliveryMethod: {
        type: Schema.Types.ObjectID,
        ref: 'Delivery'
    },
});

export default model('Purchase', purchaseSchema);
