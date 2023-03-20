import Image from 'next/image';
import { useState } from 'react';
import { atom, useAtom } from 'jotai';

import search from '../../../../public/search.svg';
import { Button, ContainerInput, Input } from './styles';

export const searchAtom = atom<string>('');

export default function Search() {
  const [searchValue, setSearchValue] = useAtom(searchAtom);

  return (
    <ContainerInput>
      <Input
        type="text"
        placeholder="Pesquisar Notas"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <Image src={search} alt="" />
    </ContainerInput>
  );
}
