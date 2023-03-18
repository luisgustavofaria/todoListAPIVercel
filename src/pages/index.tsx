import { useEffect, useMemo, useState } from "react"
import { useAtomValue } from "jotai";

import { ContainerTodo } from "@/components/CardsStyles/styles";
import Header from "@/components/Header"
import TodoForm from "@/components/TodoForm"
import TodoList from "@/components/TodoList";
import { searchAtom } from "../components/Header/Search";


export interface ITodoList {
  id: string;
  titleTodoList: string;
  textAreaTodoList: string;
  isFavorited: boolean
}

export default function Home() {

  const [todoForm, setTodoForm] = useState<ITodoList[]>([])
console.log(todoForm);

  function addTodoList(titleNew:string, textAreaNew: string, isFavorited: boolean) {
    setTodoForm( oldState => [
      ...oldState,
      {
        id: crypto.randomUUID(),
        titleTodoList: titleNew,
        textAreaTodoList: textAreaNew,
        isFavorited,
      }
    ])
  }

  function deleteTodoListById(todoListId: string){
    const newTodoForm = todoForm.filter((todoList) => todoList.id !== todoListId)
    setTodoForm(newTodoForm)
  }

  function editTodoListById(todoListId: string, title: string, textarea: string){
    const todoListToEdit = todoForm.find(el => el.id === todoListId);

    if(todoListToEdit) {
      const todoListEdited: ITodoList = {
        ...todoListToEdit,
        titleTodoList: title,
        textAreaTodoList: textarea,
      }
      const newTodoList = todoForm.map(el => el.id === todoListId ? todoListEdited : el)
      setTodoForm(newTodoList);
    }
  }


function toggleFavorited(id: string) {
  const newTodoForm = todoForm.map((todoList) => {
      if (todoList.id === id) {
        return {
          ...todoList,
          isFavorited: !todoList.isFavorited,
        }
      }
      return todoList;
    })
    setTodoForm(newTodoForm)
  }

  const searchValue = useAtomValue(searchAtom).toLocaleLowerCase();

  // const filterTodos = todoForm.filter(
  //   (task) =>
    
  //     `${task.titleTodoList?.toLocaleLowerCase()}${task.textAreaTodoList?.toLocaleLowerCase()}`.includes(
  //       searchValue
  //     )  && !task.isFavorited 
  // )
  
  // const favoritedList = todoForm.filter(task => task.isFavorited)
  // const list = [ ...favoritedList,  ...filterTodos]
  
  const list = useMemo(() => {
    const filterTodos = todoForm.filter(
      (task) =>
        `${task.titleTodoList?.toLocaleLowerCase()}${task.textAreaTodoList?.toLocaleLowerCase()}`.includes(
          searchValue
        )  || !task.isFavorited && task.isFavorited
    )
  
    const favoritedList = todoForm.filter(task => task.isFavorited)
    
    return [ ...filterTodos, ...favoritedList]
  }, [todoForm, searchValue])


  return (
    <div>
      <Header/>
      <ContainerTodo>
      <TodoForm    
        onAddTodoList={addTodoList}    
        /> 
        {list.map((task => (
          <TodoList
            key={task.id} 
            task={task} 
            onDelete={deleteTodoListById} 
            onChecked={toggleFavorited}  
            onEdit={editTodoListById} 
          />
          )))
        }
        
        </ContainerTodo>
    </div>
  )
}