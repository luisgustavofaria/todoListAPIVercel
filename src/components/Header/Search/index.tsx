import Image from "next/image"

import search from "../../../../public/search.svg"
import { Button, ContainerInput, Input } from "./styles"

export default function Search(  ) {
    return (
      <ContainerInput>
        <Input type="text" placeholder="Pesquisar Notas" />
        
        <Image src={search} alt="vectorX" />
        
      </ContainerInput>
    )
  }