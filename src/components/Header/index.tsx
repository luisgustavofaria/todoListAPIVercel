import { useSetAtom } from 'jotai';
import Image from 'next/image';

import image8 from '../../../public/image8.svg';
import vectorX from '../../../public/vectorX.svg';
import Search, { searchAtom } from './Search';
import { Container, ContainerHeader } from './styles';

export default function Header() {
  const setSearchValue = useSetAtom(searchAtom);
  return (
    <ContainerHeader>
      <Container>
        <Image src={image8} alt="" />
        <p>CoreNotes</p>
        <Search />
      </Container>
      <Image
        src={vectorX}
        alt=""
        style={{ cursor: 'pointer' }}
        onClick={() => setSearchValue('')}
      />
    </ContainerHeader>
  );
}
