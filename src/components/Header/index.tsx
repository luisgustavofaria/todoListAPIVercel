import Image from "next/image"

import image8 from "../../../public/image8.svg"
import vectorX from "../../../public/vectorX.svg"
import Search from "./Search"
import { Container, ContainerHeader } from "./styles"

export default function Header(  ) {
    return (
      <ContainerHeader>
        <Container>
          <Image src={image8} alt="image8" />
          <p>CoreNotes</p>
        <Search/> 
        </Container>
        <Image src={vectorX} alt="vectorX" />
      </ContainerHeader>
    )
  }