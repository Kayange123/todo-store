import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  id: {
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastUpdate: {
    type: Date,
  },
});

export default mongoose.model("Todo", todoSchema);
