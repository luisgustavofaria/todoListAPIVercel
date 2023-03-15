import Image from "next/image";

import { CardPost, CardHeader, Footer, Title, CardHeaderDescription, TextAreaPosted, TextAreaNew, Button, ContainerTodo, FooterPost } from "../CardsStyles/styles";

import favoriteNoCheked from "../../../public/favoriteNoCheked.svg"
import vectorX from "../../../public/vectorX.svg"
import Comment from "../TodoList"
import { useState } from "react";


export default function TodoForm( ){

    const [newCommentText, setNewCommentText] = useState('');

    const [comments, setComments] = useState([
        'Primeiro Post'
    ])

    function handleCrateNewComment() {
        event.preventDefault()
        
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
      }    


    return(
        <ContainerTodo>
            <CardPost onSubmit={handleCrateNewComment}>
                    <div>
                        <CardHeader>  
                            <Title placeholder="Titulo"/>                                     
                            <Image src={favoriteNoCheked} alt="" />               
                        </CardHeader>
                        <TextAreaNew
                            name="comment"
                            placeholder="Criar nota..."
                            onChange={handleNewCommentChange}
                            value={newCommentText}
                        ></TextAreaNew>                       
                    </div>                                                                   
                    <FooterPost>
                        <Button>Publicar</Button>     
                        <Image src={vectorX} alt="" /> 
                    </FooterPost>         
            </CardPost>   
            
            {comments.map(comment => {
                return <Comment key={0} content={comment}/>
            })}
            
        
        </ContainerTodo>
        
    )
}