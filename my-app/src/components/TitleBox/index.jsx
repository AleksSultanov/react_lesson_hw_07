import {Title} from '../ui/Title/index.jsx';
import classes from './styles.module.css';

export function TitleBox() {
  return (
    <div className={classes.box}>
        <Title
          title="Домашнее задание по React №6"
        />
        <Title
          title="Султанов А"
          caption="Задание: Создать react приложение и написать компонент формы используя state, props и условия"
        />
    </div>
  );
}

export function BottomBox() {
  return (
    <div className={classes.box}>
        <Title
          caption="Краткое описание:"
        />
        <Title
          caption="За основу взята форма свойтва атрибутов из макета курсовой."
        />
        <Title
          caption="Но без справочников. При сохранении проверка на заполнение полей код и наименование"
        />
        <Title
          caption="Используются компоненты : TitleBox, BottomBox, AtributeForm, Title, Button, Field. Button, Field из урока, но добавлены props "
        />

    </div>
  );
}

