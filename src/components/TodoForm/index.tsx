import Image from 'next/image';
import { useState } from 'react';

import {
  CardTodoForm,
  CardHeader,
  Title,
  TextAreaNew,
  Button,
  FooterTodoForm,
} from '../CardsStyles/styles';
import favoriteNoCheked from '../../../public/favoriteNoCheked.svg';
import favoriteCheked from '../../../public/favoriteCheked.svg';

interface Props {
  onAddTodoList: (
    titleNew: string,
    textAreaNew: string,
    isFavorited: boolean
  ) => void;
}

export default function TodoForm({ onAddTodoList }: Props) {
  const [titleNew, setTitleNew] = useState('');
  const [textAreaNew, setTextAreaNew] = useState('');
  const [isFavorited, setisFavorited] = useState(false);

  function handleSubmit(event: React.SyntheticEvent<EventTarget>) {
    event.preventDefault();
    onAddTodoList(titleNew, textAreaNew, isFavorited);
    setTitleNew('');
    setTextAreaNew('');
  }

  function onChangeTitleNew(
    event: React.ChangeEvent<
      HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
    >
  ) {
    setTitleNew(event.target.value);
  }

  function onChangeTextAreaNew(
    event: React.ChangeEvent<
      HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
    >
  ) {
    setTextAreaNew(event.target.value);
  }

  const onChangeChecked = () => {
    setisFavorited((oldState) => !oldState);
  };

  return (
    <CardTodoForm onSubmit={handleSubmit}>
      <div>
        <CardHeader>
          <Title
            onChange={onChangeTitleNew}
            value={titleNew}
            placeholder="Titulo"
          />
          <div onClick={onChangeChecked}>
            <Image
              src={isFavorited ? favoriteCheked : favoriteNoCheked}
              alt=""
            />
          </div>
        </CardHeader>
        <TextAreaNew
          name="todoList"
          placeholder="Criar nota..."
          onChange={onChangeTextAreaNew}
          value={textAreaNew}
        ></TextAreaNew>
      </div>
      <FooterTodoForm>
        <Button></Button>
      </FooterTodoForm>
    </CardTodoForm>
  );
}
