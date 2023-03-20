import Image from "next/image";
import { useState, } from "react";

import { CardTodoList, CardHeader, FooterTodoList, Title, TextAreaTodoList, TextAreaNew, Button } from "../CardsStyles/styles";
import favoriteCheked from "../../../public/favoriteCheked.svg"
import favoriteNoCheked from "../../../public/favoriteNoCheked.svg"
import colors from "../../../public/colors.svg"
import colorsSave from "../../../public/colorsSave.svg"
import editSave from "../../../public/editSave.svg"
import edit from "../../../public/edit.svg"
import vectorX from "../../../public/vectorX.svg"
import { ITodoList } from "../../pages/index";
import {Circle, ContainerCircle, Colors} from "./Colors/styled";


interface Props {
    task: ITodoList;   
    onDelete: (todoListId: string) => void 
    onChecked: (todoListId: string) => void 
    onEdit: (todoListId: string, title: string, textarea: string, color:string) => void 
    onColorEdit: (todoListId: string, color:string) => void 
  }

export default function TodoList( {task, onDelete, onChecked, onEdit, onColorEdit}:Props  ){

    const [disable, setDisable] = useState(true)
    const [title, setTitle] = useState(task.titleTodoList)
    const [textArea, setTextArea] = useState(task.textAreaTodoList)
    const [backGroundColor, setbackGroundColor] = useState(task.color)
    const [hiddenDiv, setHiddenDiv] = useState(false)
    
    

    function handleSubmit(event: React.SyntheticEvent<EventTarget>){
        event.preventDefault()
        
    }
    function editlist() {
        if(disable) {
            setDisable(!disable)
            return
        }
        onEdit(task.id, title, textArea, backGroundColor)
        setDisable(!disable)
    }
    
    return(
        <CardTodoList onSubmit={handleSubmit} colorBack={backGroundColor}>                     
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
                        <Image src={disable ? edit : editSave} alt="" />
                    </button>
                    <button>
                        <Image src={hiddenDiv ? colorsSave : colors} alt="" onClick={() => setHiddenDiv(!hiddenDiv)}/>
                    </button>
                    </div>
                <button onClick={() => onDelete(task.id)}>
                    <Image src={vectorX} alt="" />
                </button>
            </FooterTodoList>
            {hiddenDiv && 
            <Colors >
                <ContainerCircle>
                    <Circle onClick={() => {
                        setbackGroundColor("#BAE2FF")
                        onColorEdit(task.id,"#BAE2FF") 
                    }}    
                    
                    />
                    <Circle onClick={() => setbackGroundColor("#B9FFDD")} style={{background:"#B9FFDD"}}/>
                    <Circle onClick={() => setbackGroundColor("#FFE8AC")} style={{background:"#FFE8AC"}}/>
                    <Circle onClick={() => setbackGroundColor("#FFCAB9")} style={{background:"#FFCAB9"}}/>
                    <Circle onClick={() => setbackGroundColor("#F99494")} style={{background:"#F99494"}}/>
                    <Circle onClick={() => setbackGroundColor("#9DD6FF")} style={{background:"#9DD6FF"}}/>
                </ContainerCircle>
                <ContainerCircle>
                    <Circle onClick={() => setbackGroundColor("#ECA1FF")} style={{background:"#ECA1FF"}}/>
                    <Circle onClick={() => setbackGroundColor("#DAFF8B")} style={{background:"#DAFF8B"}}/>
                    <Circle onClick={() => setbackGroundColor("#FFA285")}style={{background:"#FFA285"}}/>
                    <Circle onClick={() => setbackGroundColor("#CDCDCD")} style={{background:"#CDCDCD"}}/>
                    <Circle onClick={() => setbackGroundColor("#979797")} style={{background:"#979797"}}/>
                    <Circle onClick={() => setbackGroundColor("#A99A7C")} style={{background:"#A99A7C"}}/>
                </ContainerCircle>
                
            </Colors>
            }
        </CardTodoList>   
    )
}