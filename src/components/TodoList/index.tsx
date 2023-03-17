import Image from "next/image";
import { useState, } from "react";

import { CardTodoList, CardHeader, FooterTodoList, Title, TextAreaTodoList, TextAreaNew, Button } from "../CardsStyles/styles";
import favoriteCheked from "../../../public/favoriteCheked.svg"
import favoriteNoCheked from "../../../public/favoriteNoCheked.svg"
import colors from "../../../public/colors.svg"
import edit from "../../../public/edit.svg"
import vectorX from "../../../public/vectorX.svg"
import { ITodoList } from "../../pages/index";

interface Props {
    todoList: ITodoList;   
    onDelete: (todoListId: string) => void 
    onChecked: (todoListId: string) => void 
    onEdit: (todoListId: string) => void 
  }

export default function TodoList( {todoList, onDelete, onChecked, onEdit}:Props  ){

    function handleSubmit(event: React.SyntheticEvent<EventTarget>){
        event.preventDefault()
        
    }
    
    return(
        <CardTodoList onSubmit={handleSubmit}>                     
            <CardHeader>
                <Title 
                    value={todoList.titleTodoList}
                    />
                <div           
                onClick={() => onChecked(todoList.id)}
                >
                {todoList.imageChekedList ? <Image src={favoriteCheked} alt="" /> : <Image src={favoriteNoCheked} alt="" />}
                </div>
            </CardHeader>                  
            <TextAreaTodoList value={todoList.textAreaTodoList}/>
                       
            <FooterTodoList>
                <div> 
                    <button onClick={() => onEdit(todoList.id)}>
                        <Image src={edit} alt="" />
                    </button>
                    <button>
                        <Image src={colors} alt="" />
                    </button>
                    </div>
                <button onClick={() => onDelete(todoList.id)}>
                    <Image src={vectorX} alt="" />
                </button>
            </FooterTodoList>
        
        </CardTodoList>   
    )
}