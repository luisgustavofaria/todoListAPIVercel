import Image from "next/image";
import { useState } from "react";

import { CardTodoForm, CardHeader, Title, TextAreaNew, Button, ContainerTodo, FooterTodoForm } from "../CardsStyles/styles";
import favoriteNoCheked from "../../../public/favoriteNoCheked.svg"
import vectorX from "../../../public/vectorX.svg"
import Comment from "../TodoList"
import TodoList from "../TodoList";
import { ITodoList } from "../../pages/index";

interface Props {
    todoForm: ITodoList[];
    onDelete: (todoListId: string) => void;
    onAddTodoList: (textAreaNew: string) => void;
  }

export default function TodoForm( {todoForm, onAddTodoList, onDelete}:Props){

    const [textAreaNew, setTextAreaNew] = useState("")

    function handleSubmit(event: React.SyntheticEvent<EventTarget>){
        event.preventDefault()
        onAddTodoList(textAreaNew)
        setTextAreaNew("")
    }

    function onChangeTextAreaNew(event: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement>) {
        setTextAreaNew(event.target.value)
    }
    
    return(
        <ContainerTodo>
            <CardTodoForm onSubmit={handleSubmit}>
                    <div>
                        <CardHeader>  
                            <Title placeholder="Titulo"/>                                     
                            <Image src={favoriteNoCheked} alt="" />               
                        </CardHeader>
                        <TextAreaNew
                            name="todoList"
                            placeholder="Criar nota..."
                            onChange={onChangeTextAreaNew}
                            value={textAreaNew}
                        ></TextAreaNew>                       
                    </div>                                                                   
                    <FooterTodoForm>
                        <Button>Publicar</Button>     
                        <Image src={vectorX} alt="" /> 
                    </FooterTodoForm>         
            </CardTodoForm>   
            
            {todoForm.map((todoList => (
                <TodoList key={todoList.id} todoList={todoList} onDelete={onDelete}/>
            )))}
            
        
        </ContainerTodo>
        
    )
}