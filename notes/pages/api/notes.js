import mongoose from 'mongoose';
import Note from '@/models/Note';
import connectDB from '@/middleware/mongoose';

const handler = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const notes = await Note.find({}).sort({ createdAt: 'desc' });
            res.status(200).json(notes);
        } catch (error) {
            res.status(500).json({ error: 'Something went wrong' });
        }
    }
    else if (req.method === 'POST') {
        try {
            const note = await Note.create(req.body);
            res.status(201).json(note);
        } catch (error) {
            res.status(500).json({ error: 'Something went wrong' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).json({ error: `Method ${req.method} not allowed` });
    }

}

export default connectDB(handler);