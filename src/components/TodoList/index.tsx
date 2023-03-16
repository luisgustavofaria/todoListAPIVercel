import Image from "next/image";
import { useState, } from "react";

import { CardComment, CardHeader, Footer, Title, TextAreaPosted, TextAreaNew, Button } from "../CardsStyles/styles";
import favoriteCheked from "../../../public/favoriteCheked.svg"
import favoriteNoCheked from "../../../public/favoriteNoCheked.svg"
import colors from "../../../public/colors.svg"
import edit from "../../../public/edit.svg"
import vectorX from "../../../public/vectorX.svg"
import { ITodoList } from "../../pages/index";

interface Props {
    todoList: ITodoList;   
    onDelete: (todoListId: string) => void 
  }

export default function TodoList( {todoList, onDelete}:Props  ){

    

    return(
        <CardComment >                     
            <CardHeader>
                <Title placeholder="Titulo"/>
                <Image src={favoriteCheked} alt="" />                   
            </CardHeader>                  
            <TextAreaPosted>{todoList.textAreaPosted}</TextAreaPosted>                      
                   
                        
            <Footer>
                <div> 
                    <button>
                        <Image src={edit} alt="" />
                    </button>
                    <button>
                        <Image src={colors} alt="" />
                    </button>
                    </div>
                <button onClick={() => onDelete(todoList.id)}>
                    <Image src={vectorX} alt="" />
                </button>
            </Footer>
        
        </CardComment>   
    )
}