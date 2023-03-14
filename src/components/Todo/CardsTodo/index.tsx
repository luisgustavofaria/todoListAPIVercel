import Image from "next/image";

import { Card, CardHeader, Description, Footer, Title } from "./styles";
import favoriteCheked from "../../../../public/favoriteCheked.svg"
import colors from "../../../../public/colors.svg"
import edit from "../../../../public/edit.svg"
import vectorX from "../../../../public/vectorX.svg"

interface TodoProps{
    title?: string;
    description?: string;
    color?: string;
    favorited?: boolean;
    type?: "newtodo"|"existingtodo"
}

export default function CardsTodo( {type}:TodoProps) {
    return(
        <Card>
            <div>
                <CardHeader>
                    <Title>Titulo</Title>
                    <Image src={favoriteCheked} alt="" />
                </CardHeader>
                <Description>Clique ou arraste o arquivo para esta área para fazer upload</Description>
            </div>
            <div>
            <Footer>
                <div>
                    <Image src={edit} alt="" />
                    <Image src={colors} alt="" />
                </div>
                <div>
                    <Image src={vectorX} alt="" />
                </div>
            </Footer>
            </div>
        </Card>   
    )
}