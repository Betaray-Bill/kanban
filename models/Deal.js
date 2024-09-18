import mongoose from "mongoose";


const dealSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    stage: { type: mongoose.Schema.Types.ObjectId, ref: 'Stage' }, // Reference to the current stage
});

const Deal = mongoose.model('Deal', dealSchema);
export default Deal;