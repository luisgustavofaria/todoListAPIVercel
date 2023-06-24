import Image from 'next/image';
import { useState } from 'react';

import {
  CardTodoForm,
  CardHeader,
  Title,
  TextAreaNew,
  Button,
  FooterTodoForm,
  ErrorText,
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
  const [titleError, setTitleError] = useState(false);
  const [textAreaError, setTextAreaError] = useState(false);

  function handleSubmit(event: React.SyntheticEvent<EventTarget>) {
    event.preventDefault();
    if (titleNew.trim() === '') {
      setTitleError(true);
      return;
    }

    if (textAreaNew.trim() === '') {
      setTextAreaError(true);
      return;
    }
    setTitleError(false);
    setTextAreaError(false);
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
    setTitleError(false); // Limpar o erro quando o usuário começar a digitar
  }

  function onChangeTextAreaNew(
    event: React.ChangeEvent<
      HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
    >
  ) {
    setTextAreaNew(event.target.value);
    setTextAreaError(false); // Limpar o erro quando o usuário começar a digitar
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
            error={titleError}
          />

          <div onClick={onChangeChecked}>
            <Image
              src={isFavorited ? favoriteCheked : favoriteNoCheked}
              alt=""
            />
          </div>
        </CardHeader>
        <div>
          {titleError && <ErrorText>Favor escrever um título</ErrorText>}
        </div>
        <TextAreaNew
          name="todoList"
          placeholder="Criar nota..."
          onChange={onChangeTextAreaNew}
          value={textAreaNew}
          error={textAreaError}
        ></TextAreaNew>
        <div>
          {textAreaError && <ErrorText>Favor criar uma nota</ErrorText>}
        </div>
      </div>
      <FooterTodoForm>
        <Button></Button>
      </FooterTodoForm>
    </CardTodoForm>
  );
}
