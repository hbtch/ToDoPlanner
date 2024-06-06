import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import styled from '@emotion/styled'

const ButtonMake = styled(Button)`
  background-color: ${(props) => (props.active ? '#ffb6c1' : '#ffc0cb')};
  color: black;
  margin: 10px;
  border-radius: 15px;
  &:hover {
    background-color: ${(props) => (props.active ? '#ffa07a' : '#ff69b4')};
  }
`
const ButtonInProgress = styled(Button)`
  background-color: ${(props) => (props.active ? '#ffb6c1' : '#ffc0cb')};
  color: black;
  margin: 10px;
  border-radius: 15px;
  &:hover {
    background-color: ${(props) => (props.active ? '#ffa07a' : '#ff69b4')};
  }
`
const ButtonDone = styled(Button)`
  background-color: ${(props) => (props.active ? '#ffb6c1' : '#ffc0cb')};
  color: black;
  margin: 10px;
  border-radius: 15px;
  &:hover {
    background-color: ${(props) => (props.active ? '#ffa07a' : '#ff69b4')};
  }
`
const ToDoList = () => {
  const [active, setActive] = useState('1')
  const handleClick = (id) => () => {
    setActive(id)
  }
  return (
    <div>
      <br />
      <ButtonMake
        text="Сделать"
        active={active === '1'}
        onClick={handleClick('1')}
      />
      <ButtonInProgress
        text="В работе"
        active={active === '2'}
        onClick={handleClick('2')}
      />
      <ButtonDone
        text="Готово"
        active={active === '3'}
        onClick={handleClick('3')}
      />
    </div>
  )
}

export default ToDoList
