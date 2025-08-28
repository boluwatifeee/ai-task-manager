import mongoose, { Schema, Document } from "mongoose";

export interface ITask extends Document {
  title: string;
  status: "todo";
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
  deadline?: Date;
}

const TaskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["todo", "in-progress", "done"],
    default: "todo",
  },
  deadline: { type: Date },
  createdBy: { type: String, required: true },
});

export default mongoose.model<ITask>("Task", TaskSchema);
