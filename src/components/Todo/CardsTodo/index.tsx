import Image from "next/image";

import { Card, CardHeader, Footer, Title, CardHeaderDescription, TextAreaPosted, TextAreaNew, Button } from "./styles";
import favoriteCheked from "../../../../public/favoriteCheked.svg"
import favoriteNoCheked from "../../../../public/favoriteNoCheked.svg"
import colors from "../../../../public/colors.svg"
import edit from "../../../../public/edit.svg"
import vectorX from "../../../../public/vectorX.svg"

interface TodoProps{
    title?: string;
    description?: string;
    color?: string;
    button?: boolean;
    favorited: boolean;
    type: "newCard"|"existingtodoCard";
    
}

export default function CardsTodo( {type, favorited, button}:TodoProps) {
    return(
        <Card type={type} >
            <CardHeaderDescription>
                <div>
                    <CardHeader>
                        <Title placeholder="Titulo"/>
                        { favorited === true &&
                        <Image src={favoriteCheked} alt="" />
                    }
                        { favorited === false &&
                        <Image src={favoriteNoCheked} alt="" />
                    }
                    </CardHeader>
                    { type === 'existingtodoCard'?
                    <form action="">
                        <TextAreaPosted>Clique ou arraste o arquivo para esta área para fazer upload</TextAreaPosted>
                    </form> :
                    <form action="">
                        <TextAreaNew>Criar nota...</TextAreaNew>        
                    </form>
                    }  
                </div>
                { button === true &&     
                    <Button>Publicar</Button>     
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