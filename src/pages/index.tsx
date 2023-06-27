import { useEffect, useMemo, useState } from 'react';
import { useAtomValue } from 'jotai';
import axios from 'axios';

import {
  ContainerFavoriteOrNo,
  ContainerList,
  ContainerTodo,
  Task,
} from '@/components/CardsStyles/styles';
import Header from '@/components/Header';
import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';
import { searchAtom } from '../components/Header/Search';

export interface ITodoList {
  _id: string;
  titleTodoList: string;
  textAreaTodoList: string;
  isFavorited: boolean;
  color: string;
}

export default function Home() {
  const [todoForm, setTodoForm] = useState<ITodoList[]>([]);

  useEffect(() => {
    getTodo();
  }, []);

  async function getTodo() {
    const response = await axios.get('/api/todo');
    setTodoForm(response.data);
  }

  async function addTodoList(
    titleNew: string,
    textAreaNew: string,
    isFavorited: boolean
  ) {
    const data = {
      titleTodoList: titleNew,
      textAreaTodoList: textAreaNew,
      isFavorited,
      color: '#FFFFFF',
    };

    const todo = await axios.post('/api/todo', data);
    setTodoForm((oldState) => [...oldState, todo.data]);
  }

  async function deleteTodoListById(todoListId: any) {
    const newTodoForm = todoForm.filter(
      (todoList) => todoList._id !== todoListId
    );
    setTodoForm(newTodoForm);
    await axios.delete('/api/todo', {
      params: { todo_id: todoListId },
    });
  }

  async function editColorById(todoListId: string, color: string) {
    const editColor = todoForm.find((el) => el._id === todoListId);
    if (editColor) {
      const colorEdited = {
        ...editColor,
        todo_id: editColor._id,
        color,
      };
      const newTodoList = todoForm.map((el) =>
        el._id === todoListId ? colorEdited : el
      );
      setTodoForm(newTodoList);
      await axios.put('/api/todo', colorEdited);
    }
  }

  async function editTodoListById(
    todoListId: string,
    title: string,
    textarea: string
  ) {
    const todoListToEdit = todoForm.find((el) => el._id === todoListId);

    if (todoListToEdit) {
      const todoListEdited = {
        ...todoListToEdit,
        todo_id: todoListToEdit._id,
        titleTodoList: title,
        textAreaTodoList: textarea,
      };
      const newTodoList = todoForm.map((el) =>
        el._id === todoListId ? todoListEdited : el
      );
      setTodoForm(newTodoList);
      await axios.put('/api/todo', todoListEdited);
    }
  }

  async function toggleFavorited(id: string) {
    const newTodoForm = todoForm.map((todoList) => {
      if (todoList._id === id) {
        axios
          .put('/api/todo', {
            todo_id: todoList._id,
            isFavorited: !todoList.isFavorited,
          })
          .then((r) => r);
        return {
          ...todoList,
          isFavorited: !todoList.isFavorited,
        };
      }
      return todoList;
    });
    setTodoForm(newTodoForm);
  }

  const searchValue = useAtomValue(searchAtom).toLocaleLowerCase();

  const list = useMemo(() => {
    const filterTodos = todoForm.filter(
      (task) =>
        `${task.titleTodoList?.toLocaleLowerCase()}${task.textAreaTodoList?.toLocaleLowerCase()}`.includes(
          searchValue
        ) ||
        (!task.isFavorited && task.isFavorited)
    );

    const filterReorganize = filterTodos.sort((a, b) =>
      Number(a.isFavorited > b.isFavorited) === 1 ? -1 : 0
    );

    return filterReorganize;
  }, [searchValue, todoForm]);

  return (
    <div>
      <Header />
      <ContainerTodo>
        <TodoForm onAddTodoList={addTodoList} />
        <ContainerList>
          <ContainerFavoriteOrNo>
            {list.filter((item) => item.isFavorited).length > 0 && (
              <p>Favoritas</p>
            )}
            <Task>
              {list
                .filter((item) => {
                  return item.isFavorited;
                })
                .map((task) => (
                  <TodoList
                    key={task._id}
                    task={task}
                    onDelete={deleteTodoListById}
                    onChecked={toggleFavorited}
                    onEdit={editTodoListById}
                    onColorEdit={editColorById}
                  />
                ))}
            </Task>
          </ContainerFavoriteOrNo>
          <ContainerFavoriteOrNo>
            {list.filter((item) => !item.isFavorited).length > 0 && (
              <p>Outras</p>
            )}
            <Task>
              {list
                .filter((item) => {
                  return !item.isFavorited;
                })
                .map((task) => (
                  <TodoList
                    key={task._id}
                    task={task}
                    onDelete={deleteTodoListById}
                    onChecked={toggleFavorited}
                    onEdit={editTodoListById}
                    onColorEdit={editColorById}
                  />
                ))}
            </Task>
          </ContainerFavoriteOrNo>
        </ContainerList>
      </ContainerTodo>
    </div>
  );
}
