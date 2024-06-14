import {
  ButtonContainer,
  StyledButton,
  StyledHeader,
} from '../../components/Button/styled'
import React, { useState } from 'react'
import ListItem from '../../components/ListItem'

const ToDoList = () => {
  const [active, setActive] = useState(1)
  const handleClick = (id) => () => {
    setActive(id)
  }
  return (
    <div>
      <StyledHeader>
        <img src="/bee-left.png" alt="LeftBeeImage" className="small-icon" />
        <h1>To Do List</h1>
        <img src="/bee-right.png" alt="LeftBeeImage" className="small-icon" />
      </StyledHeader>
      <ButtonContainer>
        <br />
        <StyledButton active={active === '1'} onClick={handleClick('1')}>
          Сделать
        </StyledButton>

        <StyledButton active={active === '2'} onClick={handleClick('2')}>
          В работе
        </StyledButton>

        <StyledButton active={active === '3'} onClick={handleClick('3')}>
          Готово
        </StyledButton>
      </ButtonContainer>
      <div>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  )
}
export default ToDoList
