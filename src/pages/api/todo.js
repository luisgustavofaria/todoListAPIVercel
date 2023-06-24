import createHandler from '../../../lib/middlewares/nextConnect';
import validation from '../../../lib/middlewares/validation';

import { createTodoSchema } from '../../../modules/todo.schema';
import Todo from '../../../modules/todo.model';

const handler = createHandler();

handler.get(async (req, res) => {
  try {
    const todolist = await Todo.find();
    return res.status(200).json(todolist);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

handler.post(validation({ body: createTodoSchema }), async (req, res) => {
  try {
    const { titleTodoList, textAreaTodoList, isFavorited, color } = req.body;
    const newTodo = await Todo.create({
      titleTodoList,
      textAreaTodoList,
      isFavorited,
      color,
    });
    return res.status(201).send(newTodo);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

handler.delete(async (req, res) => {
  try {
    const { todo_id } = req.query;
    const deletedTodo = await Todo.findByIdAndDelete(todo_id);

    if (!deletedTodo) {
      return res.status(404).send('Todo not found');
    }

    return res.status(200).send('Todo deleted successfully');
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

handler.put(async (req, res) => {
  try {
    const { todo_id, titleTodoList, textAreaTodoList, isFavorited, color } =
      req.body;

    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: todo_id }, // Use the _id field to identify the todo list to update
      {
        titleTodoList,
        textAreaTodoList,
        isFavorited,
        color,
      },
      { new: true } // Return the updated document
    );

    if (!updatedTodo) {
      return res.status(404).send('Todo not found');
    }

    return res.status(200).send(updatedTodo);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

export default handler;
