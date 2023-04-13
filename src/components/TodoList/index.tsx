import Image from 'next/image';
import { useRef, useState } from 'react';
import theme from '@/styles/theme';

import {
  CardTodoList,
  CardHeader,
  FooterTodoList,
  Title,
  TextAreaTodoList,
  TextAreaNew,
  Button,
} from '../CardsStyles/styles';
import favoriteCheked from '../../../public/favoriteCheked.svg';
import favoriteNoCheked from '../../../public/favoriteNoCheked.svg';
import colors from '../../../public/colors.svg';
import colorsSave from '../../../public/colorsSave.svg';
import editSave from '../../../public/editSave.svg';
import edit from '../../../public/edit.svg';
import vectorX from '../../../public/vectorX.svg';
import { ITodoList } from '../../pages/index';
import { Circle, Colors } from './Colors/styled';

interface Props {
  task: ITodoList;
  onDelete: (todoListId: string) => void;
  onChecked: (todoListId: string) => void;
  onEdit: (
    todoListId: string,
    title: string,
    textarea: string,
    color: string
  ) => void;
  onColorEdit: (todoListId: string, color: string) => void;
}

export default function TodoList({
  task,
  onDelete,
  onChecked,
  onEdit,
  onColorEdit,
}: Props) {
  const [disable, setDisable] = useState(true);
  const [title, setTitle] = useState(task.titleTodoList);
  const [textArea, setTextArea] = useState(task.textAreaTodoList);
  const [backGroundColor, setBackGroundColor] = useState(task.color);
  const [hiddenDiv, setHiddenDiv] = useState(false);
  const allColors = [
    '#BAE2FF',
    '#B9FFDD',
    '#FFE8AC',
    '#FFCAB9',
    '#F99494',
    '#9DD6FF',
    '#ECA1FF',
    '#DAFF8B',
    '#FFA285',
    '#CDCDCD',
    '#979797',
    '#A99A7C',
  ];

  function handleSubmit(event: React.SyntheticEvent<EventTarget>) {
    event.preventDefault();
  }
  function editlist() {
    if (disable) {
      setDisable(!disable);
      return;
    }
    onEdit(task._id, title, textArea, backGroundColor);
    setDisable(!disable);
  }

  return (
    <CardTodoList onSubmit={handleSubmit} colorBack={backGroundColor}>
      <CardHeader>
        <Title
          disabled={disable}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div onClick={() => onChecked(task._id)}>
          <Image
            src={task.isFavorited ? favoriteCheked : favoriteNoCheked}
            alt=""
          />
        </div>
      </CardHeader>
      <TextAreaTodoList
        onChange={(e) => setTextArea(e.target.value)}
        disabled={disable}
        value={textArea}
      />

      <FooterTodoList>
        <div>
          <button onClick={editlist}>
            <Image src={disable ? edit : editSave} alt="" />
          </button>
          <button>
            <Image
              src={hiddenDiv ? colorsSave : colors}
              alt=""
              onClick={() => setHiddenDiv(!hiddenDiv)}
            />
          </button>
        </div>
        <button onClick={() => onDelete(task._id)}>
          <Image src={vectorX} alt="" />
        </button>
      </FooterTodoList>
      {hiddenDiv && (
        <Colors>
          {allColors.map((color) => {
            return (
              <Circle
                key={color}
                onClick={() => {
                  setBackGroundColor(color);
                  onColorEdit(task._id, color);
                }}
                style={{ backgroundColor: color }}
              />
            );
          })}
        </Colors>
      )}
    </CardTodoList>
  );
}
