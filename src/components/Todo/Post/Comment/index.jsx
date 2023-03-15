import Image from "next/image";

import { CardComment, CardHeader, Footer, Title, CardHeaderDescription, TextAreaPosted, TextAreaNew, Button } from "./styles";
import favoriteCheked from "../../../../../public/favoriteCheked.svg"
import favoriteNoCheked from "../../../../../public/favoriteNoCheked.svg"
import colors from "../../../../../public/colors.svg"
import edit from "../../../../../public/edit.svg"
import vectorX from "../../../../../public/vectorX.svg"



export default function Comment( ) {
    return(
        <CardComment >                     
            <CardHeader>
                <Title placeholder="Titulo"/>
                <Image src={favoriteCheked} alt="" />                   
            </CardHeader>                  
            <TextAreaPosted>Clique ou arraste o arquivo para esta área para fazer upload</TextAreaPosted>                      
                   
                        
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