import { Schema, model } from 'mongoose';

const purchaseSchema = new Schema({
    data: String
});

export default model('Purchase', purchaseSchema);
