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
    task: ITodoList;   
    onDelete: (todoListId: string) => void 
    onChecked: (todoListId: string) => void 
    onEdit: (todoListId: string, title: string, textarea: string) => void 
  }

export default function TodoList( {task, onDelete, onChecked, onEdit}:Props  ){

    const [disable, setDisable] = useState(true)
    const [title, setTitle] = useState(task.titleTodoList)
    const [textArea, setTextArea] = useState(task.textAreaTodoList)


    function handleSubmit(event: React.SyntheticEvent<EventTarget>){
        event.preventDefault()
        
    }
    function editlist() {
        if(disable) {
            setDisable(!disable)
            return
        }
        onEdit(task.id, title, textArea)
        setDisable(!disable)
    }
    
    return(
        <CardTodoList onSubmit={handleSubmit}>                     
            <CardHeader>
                <Title 
                    disabled={disable}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <div           
                onClick={() => onChecked(task.id)}
                >
                <Image src={task.isFavorited ? favoriteCheked : favoriteNoCheked} alt="" />
                </div>
            </CardHeader>                  
            <TextAreaTodoList 
            onChange={(e) => setTextArea(e.target.value)}
            disabled={disable}
            value={textArea}
            />
                       
            <FooterTodoList>
                <div> 
                    <button onClick={editlist}>
                        <Image src={edit} alt="" />
                    </button>
                    <button>
                        <Image src={colors} alt="" />
                    </button>
                    </div>
                <button onClick={() => onDelete(task.id)}>
                    <Image src={vectorX} alt="" />
                </button>
            </FooterTodoList>
        
        </CardTodoList>   
    )
}