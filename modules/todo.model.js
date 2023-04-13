import mongoose, { models, model } from 'mongoose';

const TodoSchema = new mongoose.Schema({
  titleTodoList: {
    type: String,
    required: true,
  },
  textAreaTodoList: {
    type: String,
    required: true,
  },
  isFavorited: {
    type: Boolean,
    required: true,
    default: false,
  },
  color: {
    type: String,
    required: true,
    default: '#FFFFFF',
  },
});

export default mongoose.models.Todo || mongoose.model('Todo', TodoSchema);
