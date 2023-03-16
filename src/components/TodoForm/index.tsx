import Image from "next/image";
import { useState } from "react";

import { CardPost, CardHeader, Footer, Title, TextAreaPosted, TextAreaNew, Button, ContainerTodo, FooterPost } from "../CardsStyles/styles";
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
            <CardPost onSubmit={handleSubmit}>
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
                    <FooterPost>
                        <Button>Publicar</Button>     
                        <Image src={vectorX} alt="" /> 
                    </FooterPost>         
            </CardPost>   
            
            {todoForm.map((todoList => (
                <TodoList key={todoList.id} todoList={todoList} onDelete={onDelete}/>
            )))}
            
        
        </ContainerTodo>
        
    )
}