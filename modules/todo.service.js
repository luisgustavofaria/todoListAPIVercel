import Todo from './todo.model';

export const createTodo = async (body) => {
  return await Todo.create({
    titleTodoList: body.titleTodoList,
    textAreaTodoList: body.textAreaTodoList,
    isFavorited: body.isFavorited,
    color: body.color,
  });
};

export const getTodos = async () => {
  return await Todo.find();
};
