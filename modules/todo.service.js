import Todo from './todo.model';

export const getTodos = async () => {
  return await Todo.find();
};

export const createTodo = async (body) => {
  return await Todo.create({
    titleTodoList: body.titleTodoList,
    textAreaTodoList: body.textAreaTodoList,
    isFavorited: body.isFavorited,
    color: body.color,
  });
};

export const deleteTodo = async (id) => {
  return await Todo.deleteOne({
    id,
  });
};

export const updateTodo = async (
  id,
  titleTodoList,
  textAreaTodoList,
  isFavorited,
  color
) => {
  return await Todo.findOneAndUpdate({
    id,
    titleTodoList,
    textAreaTodoList,
    isFavorited,
    color,
  });
};
