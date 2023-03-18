import Image from "next/image"
import { useState } from "react";

import search from "../../../../public/search.svg"
import { Button, ContainerInput, Input } from "./styles"

export default function Search(  ) {

  const [searchValue, setSearchValue] = useState('');
  
  
    return (
      <ContainerInput>
        <Input 
          type="text" 
          placeholder="Pesquisar Notas" 
          value={searchValue}     
          onChange={(event) => setSearchValue(event.target.value)}
          />
        
        <Image src={search} alt="vectorX" />
        
      </ContainerInput>
    )
  }