import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
    title: String,
    description: String,
    tag: String,
    required: true
}, { timestamps: true });

export default mongoose.models.Note || mongoose.model('Note', NoteSchema);