import { useEffect, useMemo, useState } from 'react';
import { useAtomValue } from 'jotai';
import axios from 'axios';

import InfiniteScroll from '../components/InfinitiScroll';
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
  const [notes, setNotes] = useState<ITodoList[]>([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [perPage, setPerPage] = useState(3);
  const [allNotesLoaded, setAllNotesLoaded] = useState(false);

  useEffect(() => {
    getTodo();
  }, []);

  async function getTodo() {
    const response = await axios.get('/api/todo');
    setNotes(response.data);
  }

  const fetchMoreNotes = async () => {
    if (isLoading || allNotesLoaded) {
      return;
    }

    setIsLoading(true);
    const newPage = page + 1;
    const newPerPage = perPage;
    const url = `/api/todo?page=${newPage}&perPage=${newPerPage}`;
    const response = await axios.get(url);
    const moreNotes = response.data;

    if (moreNotes.length === 0) {
      setAllNotesLoaded(true);
    } else {
      setPage(newPage);
      setPerPage(newPerPage);
      setNotes((prevNotes) => [...prevNotes, ...moreNotes]);
    }

    setIsLoading(false);
  };

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
    setNotes((oldState) => [...oldState, todo.data]);
  }

  async function deleteTodoListById(todoListId: any) {
    const newTodoForm = notes.filter((todoList) => todoList._id !== todoListId);
    setNotes(newTodoForm);
    await axios.delete('/api/todo', {
      params: { todo_id: todoListId },
    });
  }

  async function editColorById(todoListId: string, color: string) {
    const editColor = notes.find((el) => el._id === todoListId);
    if (editColor) {
      const colorEdited = {
        ...editColor,
        todo_id: editColor._id,
        color,
      };
      const newTodoList = notes.map((el) =>
        el._id === todoListId ? colorEdited : el
      );
      setNotes(newTodoList);
      await axios.put('/api/todo', colorEdited);
    }
  }

  async function editTodoListById(
    todoListId: string,
    title: string,
    textarea: string
  ) {
    const todoListToEdit = notes.find((el) => el._id === todoListId);

    if (todoListToEdit) {
      const todoListEdited = {
        ...todoListToEdit,
        todo_id: todoListToEdit._id,
        titleTodoList: title,
        textAreaTodoList: textarea,
      };
      const newTodoList = notes.map((el) =>
        el._id === todoListId ? todoListEdited : el
      );
      setNotes(newTodoList);
      await axios.put('/api/todo', todoListEdited);
    }
  }

  async function toggleFavorited(id: string) {
    const newTodoForm = notes.map((todoList) => {
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
    setNotes(newTodoForm);
  }

  const searchValue = useAtomValue(searchAtom).toLocaleLowerCase();

  const list = useMemo(() => {
    const filterTodos = notes.filter(
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
  }, [searchValue, notes]);

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
          {isLoading && perPage !== null && <div>Carregando...</div>}
          {!isLoading && <InfiniteScroll fetchMore={fetchMoreNotes} />}
        </ContainerList>
      </ContainerTodo>
    </div>
  );
}
