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
  const [isFavorited, setIsFavorited] = useState(false);
  const [inputError, setInputError] = useState(false);

  function handleSubmit(event: React.SyntheticEvent<EventTarget>) {
    event.preventDefault();
    if (titleNew.trim() === '') {
      setInputError(true);
      return;
    }

    if (textAreaNew.trim() === '') {
      setInputError(true);
      return;
    }
    setInputError(false);
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
    setInputError(false); // Limpar o erro quando o usuário começar a digitar
  }

  function onChangeTextAreaNew(
    event: React.ChangeEvent<
      HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
    >
  ) {
    setTextAreaNew(event.target.value);
    setInputError(false); // Limpar o erro quando o usuário começar a digitar
  }

  const onChangeChecked = () => {
    setIsFavorited((oldState) => !oldState);
  };

  return (
    <CardTodoForm onSubmit={handleSubmit}>
      <div>
        <CardHeader>
          <Title
            onChange={onChangeTitleNew}
            value={titleNew}
            placeholder="Titulo"
            error={inputError}
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
          error={inputError}
        ></TextAreaNew>
        <div>
          {inputError && (
            <ErrorText>Favor, preencher o campo de titulo e texto</ErrorText>
          )}
        </div>
      </div>
      <FooterTodoForm>
        <Button></Button>
      </FooterTodoForm>
    </CardTodoForm>
  );
}
