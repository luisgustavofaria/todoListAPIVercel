import Todo from './todo.model';

export const todoService = async (body) => {
  const dbTodo = await Todo.create(body);
  return dbTodo;
};
