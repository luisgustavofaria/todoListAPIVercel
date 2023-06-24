import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  titleTodoList: {
    type: String,
  },
  textAreaTodoList: {
    type: String,
  },
  isFavorited: {
    type: Boolean,

    default: false,
  },
  color: {
    type: String,

    default: '#FFFFFF',
  },
});

export default mongoose.models.Todo || mongoose.model('Todo', TodoSchema);
