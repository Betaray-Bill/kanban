import mongoose from "mongoose";

const stageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    position: { type: Number, required: true },
    deals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Deal' }]
});


stageSchema.pre('save', async function(next) {
    if (!this.isModified('position')) return next();

    await mongoose.models.Stage.updateMany({ position: { $gte: this.position } }, { $inc: { position: 1 } });

    next();
});

const Stage = mongoose.model('Stage', stageSchema);
export default Stage;