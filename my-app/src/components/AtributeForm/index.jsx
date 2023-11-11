import { useState} from 'react';

import { Field } from '../ui/Field/index.jsx';
import { Button } from '../ui/Button/index.jsx';
import classes from './styles.module.css';

export function AtributeForm() {
  const isButtonDisabled = true;
  const [code, setCode] = useState('');
  const [entity, setEntity] = useState('');
  const [path, setPath] = useState('путь');
  const [icon, setIcon] = useState('');
  const [name, setName] = useState('Наименование');
  const [width, setWidth] = useState('Авто');
  const [message, setMessage] =  useState('');
  
  function setCodeHandler(event) {
    setCode(event.target.value);
  }
  function setEntityHandler(event) {
    setEntity(event.target.value);
    }
  function setPathHandler(event) {
    setPath(event.target.value);
    }
  function setIconHandler(event) {
    setIcon(event.target.value);
    }
  function setNameHandler(event) {
    setName(event.target.value);
    }
  
  function setWidthHandler(event) {
    setWidth(event.target.value);
    }

  function setMessageHandler(event) {
    setMessage(event.target.value);
  }

  function clearFields() {
    setName('');
    setCode('');

  }

  function validField(fielval, fielname) {
    if (fielval.trim() === '') {
      setMessage(`Пустое поле ${fielname}`);
      return 1;
    }
    return 0;
  }

  function validFields(){
    let res = 0;
    setMessage('');
    res += validField(code,'Код');
    res += validField(name,'Наименование');
    return res;

  }

  function onSubmit(event) {
    event.preventDefault();
    if (validFields() === 0 ) {
      clearFields();
    }

   
  }

  return (
    <div className={classes.box}>
      <div className={classes.rect}></div> 
      <form className={classes.form} onSubmit={onSubmit}>
        <h1 className={classes.title}>Свойства атрибута</h1>
        <Field
          label="Код"
          value={code}
          onChange={setCodeHandler}
          fullWidth
          col_1 //Позиция в колонке грида. в ДЗ 8 передалал через динамичекий номер через 'styled-components'         
        />
        <Field
          label="Представление"
          value={entity}
          onChange={setEntityHandler}
          fullWidth
          col_2                              
        />
        <Field
          label="Путь к элементу"
          value={path}
          onChange={setPathHandler}
          fullWidth
          disabled
        />
        <Field
          label="Пиктограмма"
          value={icon}
          onChange={setIconHandler}
          fullWidth
          col_2                              
        />
        <Field
          label="Наименование"
          value={name}
          onChange={setNameHandler}
          fullWidth
        />
        <Field
          label="Ширина колонки"
          value={width}
          onChange={setWidthHandler}
          fullWidth
          col_2                              
        />
        <div className={classes.col_1}>
          <Button disabled={isButtonDisabled}>Отменить</Button>
        </div>
        <div className={classes.col_2}>
          <Button>Сохранить</Button>
        </div>
        {message && (
          <div>
            <Field
                label="Проверка валидации"
                value={message}
                onChange={setMessageHandler}
                fullWidth
                disabled
                error
              />
          </div>
        ) 
        }
      </form>
    </div>
  );
}
