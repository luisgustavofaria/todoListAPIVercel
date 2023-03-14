import Image from "next/image";

import { Card, CardHeader, Footer, Title, CardHeaderDescription } from "./styles";
import favoriteCheked from "../../../../public/favoriteCheked.svg"
import favoriteNoCheked from "../../../../public/favoriteNoCheked.svg"
import colors from "../../../../public/colors.svg"
import edit from "../../../../public/edit.svg"
import vectorX from "../../../../public/vectorX.svg"

interface TodoProps{
    title?: string;
    description?: string;
    color?: string;
    favorited: boolean;
    type: "newCard"|"existingtodoCard";
}

export default function CardsTodo( {type, favorited}:TodoProps) {
    return(
        <Card type={type} >
            <CardHeaderDescription>
                <CardHeader>
                    <Title>Titulo</Title>
                    { favorited === true &&
                    <Image src={favoriteCheked} alt="" />
                    }
                    { favorited === false &&
                    <Image src={favoriteNoCheked} alt="" />
                    }
                </CardHeader>
                { type === 'existingtodoCard'?
                <p>Clique ou arraste o a rquivo para esta área para fazer upload</p> :
                <p>Criar nota...</p>        
                }    
            </CardHeaderDescription>
        
        { type === 'existingtodoCard' &&
        <Footer>
                <div>
                    <Image src={edit} alt="" />
                    <Image src={colors} alt="" />
                </div>
                <div>
                    <Image src={vectorX} alt="" />
                </div>
            </Footer>
        }
        </Card>   
    )
}