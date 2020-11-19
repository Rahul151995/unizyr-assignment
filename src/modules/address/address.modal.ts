import * as mongoose from 'mongoose';
import { model } from 'mongoose'

const addressSchema = new mongoose.Schema(
    {
        houseFlatNo: { type: String, required: true },
        addressLine1: { type: String, required: true },
        addressLine2: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        pinCode: { type: String, required: true },
    
    }
);


export default model('address', addressSchema);