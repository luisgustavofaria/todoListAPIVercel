import Header from "@/components/Header"
import TodoForm from "@/components/TodoForm"

import { useState } from "react"

export interface ITodoList {
  id: string;
  titleTodoList: string;
  textAreaTodoList: string;
  imageChekedList: string | boolean
  
}

export default function Home() {

  const [todoForm, setTodoForm] = useState<ITodoList[]>([])

  function addTodoList(titleNew:string, textAreaNew: string, imageCheked: string) {
    setTodoForm([
      ...todoForm,
      {
        id: crypto.randomUUID(),
        titleTodoList: titleNew,
        textAreaTodoList: textAreaNew,
        imageChekedList: imageCheked,
        
      }
    ])
  }

  function deleteTodoListById(todoListId: string){
    const newTodoForm = todoForm.filter((todoList) => todoList.id !== todoListId)
    setTodoForm(newTodoForm)
  }



function toggleTodoListCheckedId(todoListId: string) {
  const newTodoForm = todoForm.map((todoList) => {
      if (todoList.id === todoListId) {
        return {
          ...todoList,
          imageChekedList: !todoList.imageChekedList,
        }
      }
      return todoList;
    })
    setTodoForm(newTodoForm)
  }

  
  return (
    <div>
      <Header/>
      <TodoForm 
        todoForm={todoForm} 
        onAddTodoList={addTodoList} 
        onDelete={deleteTodoListById} 
        onChecked={toggleTodoListCheckedId}  
        /> 
    </div>
  )
}