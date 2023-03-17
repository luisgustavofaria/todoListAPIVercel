import Image from "next/image";
import { useState } from "react";

import { CardTodoForm, CardHeader, Title, TextAreaNew, Button, ContainerTodo, FooterTodoForm } from "../CardsStyles/styles";
import favoriteNoCheked from "../../../public/favoriteNoCheked.svg"
import favoriteCheked from "../../../public/favoriteCheked.svg"
import vectorX from "../../../public/vectorX.svg"
import Comment from "../TodoList"
import TodoList from "../TodoList";
import { ITodoList } from "../../pages/index";

interface Props {
    todoForm: ITodoList[];
    onDelete: (todoListId: string) => void;
    onAddTodoList: (titleNew: string,textAreaNew: string, imageCheked: string) => void;
    //onChecked: (textAreaNew: string) => void;
  }

export default function TodoForm( {todoForm, onAddTodoList, onDelete}:Props){

    const [titleNew, setTitleNew] = useState("")
    const [textAreaNew, setTextAreaNew] = useState("")
    const [imageCheked, setImageCheked] = useState<string>(favoriteNoCheked)

    function handleSubmit(event: React.SyntheticEvent<EventTarget>){
        event.preventDefault()
        onAddTodoList(titleNew, textAreaNew, imageCheked)
        setTitleNew("")
        setTextAreaNew("")
    }

    function onChangeTitleNew(event: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement>) {
        setTitleNew(event.target.value)
    }
    
    function onChangeTextAreaNew(event: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement>) {
        setTextAreaNew(event.target.value)
    }

    const onChancecheked = () => {
        setImageCheked((state) => state === favoriteNoCheked ? favoriteCheked : favoriteNoCheked)
    }   
    
    return(
        <ContainerTodo>
            <CardTodoForm onSubmit={handleSubmit}>
                    <div>
                        <CardHeader>  
                            <Title 
                            onChange={onChangeTitleNew}
                            value={titleNew}
                            placeholder="Titulo"
                            />  
                            <div  onClick={onChancecheked}>
                                <Image src={imageCheked}  alt="" />
                            </div>                                   
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
                <TodoList 
                    key={todoList.id} 
                    todoList={todoList} 
                    onDelete={onDelete}
                    //onChecked={onChecked}
                    />
            )))}
            
        
        </ContainerTodo>
        
    )
}