import { ContainerTodo } from "@/components/CardsStyles/styles";
import Header from "@/components/Header"
import TodoForm from "@/components/TodoForm"
import TodoList from "@/components/TodoList";

import { useEffect, useState } from "react"

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

  useEffect(() => {
    console.log(todoForm);
    
  }, [todoForm])

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
      <ContainerTodo>

      <TodoForm 
        todoForm={todoForm} 
        onAddTodoList={addTodoList} 
        
        /> 
        {todoForm.map((todoList => (
                <TodoList
                    key={todoList.id} 
                    todoList={todoList} 
                    onDelete={deleteTodoListById} 
                    onChecked={toggleTodoListCheckedId}  
                    onEdit={editTodoListById} 
                    />
            )))}
        </ContainerTodo>
    </div>
  )
}