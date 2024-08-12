import { ObjectId } from 'mongodb';
import mongoose, { Schema } from 'mongoose';
const proposeSchema = new Schema({
  user: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },

  timezone: {
    type: String,
    required: true,
  },
  date: {
    type: [Date],
    required: true,
  },

  difficulty: {
    type: String,
    required: true,
  },
  objective: {
    type: String,
    required: false,
  },
});

const createSession = mongoose.model('Propose', proposeSchema);
export default createSession;
