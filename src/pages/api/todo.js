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

handler.post(validation({ body: createTodoSchema }), async (req, res) => {
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
  const updateOneTodo = await Todo.findOneAndUpdate({
    id,
    titleTodoList,
    textAreaTodoList,
    isFavorited,
    color,
  });
  if (updateOneTodo) return res.status(200).send({ ok: true });
  return res.status(400).send('post not found');
});

export default handler;

// import mongoose from 'mongoose';
// import connectDB from '../../../lib/mongoose';
// import TodoModel from '../../../modules/todo.model';
// import createHandler from '../../../lib/nextConnect';

// connectDB();

// const handler = createHandler();

// handler
//   .get('/api/todo/list-many', async (req, res) => {
//     try {
//       const todo = await TodoModel.find();
//       return res.status(200).json(todo);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).send('Internal Server Error');
//     }
//   })
//   .post('/api/todo/create', async (req, res) => {
//     try {
//       const { titleTodoList, textAreaTodoList, isFavorited, color } = req.body;
//       console.log(req.body);

//       const todo = new TodoModel({
//         titleTodoList,
//         textAreaTodoList,
//         isFavorited,
//         color,
//       });

//       await todo.save();

//       return res.status(201).json(todo);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).send('Internal Server Error');
//     }
//   })
//   .put('/api/todo/update-unique', async (req, res) => {
//     try {
//       const { todo_id, titleTodoList, textAreaTodoList, isFavorited, color } =
//         req.body;
//       if (!todo_id) {
//         return res.status(400).json({
//           error: 'Todo ID does not exist ',
//         });
//       }
//       const todo = await TodoModel.findById(todo_id);

//       if (!todo) {
//         return res.status(400).json({
//           error: 'Todo does not exist.',
//         });
//       }

//       function validate(data, savedOnDatabase) {
//         if (data !== null && data !== undefined) {
//           return data;
//         }

//         return savedOnDatabase;
//       }

//       todo.titleTodoList = validate(titleTodoList, todo.titleTodoList);
//       todo.textAreaTodoList = validate(textAreaTodoList, todo.textAreaTodoList);
//       todo.isFavorited = validate(isFavorited, todo.isFavorited);
//       todo.color = validate(color, todo.color);

//       await todo.save();

//       return res.status(201).json(todo);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).send('Internal Server Error');
//     }
//   })
//   .delete('/api/todo/delete-unique', async (req, res) => {
//     try {
//       const { todo_id } = req.query;
//       if (!todo_id) {
//         return res.status(400).json({
//           error: 'Todo ID does not exist ',
//         });
//       }

//       const todo = await TodoModel.findById(todo_id);

//       if (!todo) {
//         return res.status(400).json({
//           error: 'Todo does not exist.',
//         });
//       }

//       await TodoModel.findByIdAndDelete(todo_id);

//       return res.status(200).json(todo);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).send('Internal Server Error');
//     }
//   });

// export default handler;
