import Image from "next/image";

import { CardPost, CardHeader, Footer, Title, CardHeaderDescription, TextAreaPosted, TextAreaNew, Button, ContainerTodo, FooterPost } from "./Comment/styles";

import favoriteNoCheked from "../../../../public/favoriteNoCheked.svg"
import vectorX from "../../../../public/vectorX.svg"
import Comment from "./Comment"


export default function Post( ){
    return(
        <ContainerTodo>
            <CardPost >
                <CardHeaderDescription>
                        <div>
                            <CardHeader>  
                                <Title placeholder="Titulo"/>                                     
                                <Image src={favoriteNoCheked} alt="" />               
                            </CardHeader>
                            <TextAreaNew>Criar nota...</TextAreaNew>                       
                        </div>                                                                   
                    <FooterPost>
                        <Button>Publicar</Button>     
                        <Image src={vectorX} alt="" /> 
                    </FooterPost>
                </CardHeaderDescription>           
            </CardPost>   
            
            <Comment/>
            <Comment/>
            <Comment/>
        
        </ContainerTodo>
        
    )
}