import Header from "@/components/Header"
import TodoForm from "@/components/TodoForm"

import { useState } from "react"

export interface ITodoList {
  id: string;
  textAreaPosted: string;
  checked: boolean;
  
}

export default function Home() {

  const [todoForm, setTodoForm] = useState<ITodoList[]>([
    {
      id: "teste",
      textAreaPosted: "teste",
      checked: true,
    }
  ])

  function addTodoList(todoListTextAreaPosted: string){
    setTodoForm([
      ...todoForm,
      {
        id: crypto.randomUUID(),
        textAreaPosted: todoListTextAreaPosted,
        checked: true,
      }
    ])
  }

  function deleteTodoListById(todoListId: string){
    const newTodoForm = todoForm.filter((todoList) => todoList.id !== todoListId)
    setTodoForm(newTodoForm)
  }
TodoForm
  return (
    <div>
      <Header/>
      <TodoForm todoForm={todoForm} onAddTodoList={addTodoList} onDelete={deleteTodoListById}/>      
    </div>
  )
}
