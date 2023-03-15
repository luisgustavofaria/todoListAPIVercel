import Image from "next/image";
import { useState, } from "react";

import { CardComment, CardHeader, Footer, Title, TextAreaPosted, TextAreaNew, Button } from "../CardsStyles/styles";
import favoriteCheked from "../../../public/favoriteCheked.svg"
import favoriteNoCheked from "../../../public/favoriteNoCheked.svg"
import colors from "../../../public/colors.svg"
import edit from "../../../public/edit.svg"
import vectorX from "../../../public/vectorX.svg"



export default function TodoList( {content} ) {

    

    return(
        <CardComment >                     
            <CardHeader>
                <Title placeholder="Titulo"/>
                <Image src={favoriteCheked} alt="" />                   
            </CardHeader>                  
            <TextAreaPosted>{content}</TextAreaPosted>                      
                   
                        
            <Footer>
                <div>
                    <Image src={edit} alt="" />
                    <Image src={colors} alt="" />
                </div>
                <div>
                    <Image src={vectorX} alt="" />
                </div>
            </Footer>
        
        </CardComment>   
    )
}