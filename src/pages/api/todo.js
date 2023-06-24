import connect from 'next-connect';
import Joi from 'joi';

import createHandler from '../../../lib/middlewares/nextConnect';
import validation from '../../../lib/middlewares/validation';

import {
  createTodoSchema,
  deleteTodoSchema,
} from '../../../modules/todo.schema';
import Todo from '../../../modules/todo.model';

const handler = createHandler();

handler.get(async (req, res) => {
  try {
    const todolist = await Todo.find();
    res.status(200).json(todolist);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

handler.post(async (req, res) => {
  try {
    const { titleTodoList, textAreaTodoList, isFavorited, color } = req.body;
    const newTodo = await Todo.create({
      titleTodoList,
      textAreaTodoList,
      isFavorited,
      color,
    });
    res.status(201).send(newTodo);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

handler.delete(async (req, res) => {
  try {
    const deleteOneTodo = await Todo.deleteOne(req.body.id);
    if (deleteOneTodo) return res.status(200).send({ ok: true });
    return res.status(400).send('post not found');
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

handler.put(async (req, res) => {
  console.log(req.body);
  const updateOneTodo = await Todo.findOneAndUpdate(
    { _id: req.body.todo_id }, // use the _id field to identify the todo list to update
    {
      titleTodoList: req.body.titleTodoList,
      textAreaTodoList: req.body.textAreaTodoList,
      isFavorited: req.body.isFavorited,
      color: req.body.color,
    },
    { new: true } // return the updated document
  );
});

export default handler;
