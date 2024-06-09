import { StyledButton } from '../../components/Button/styled'
import React, { useState } from 'react'

const ToDoList = () => {
  const [active, setActive] = useState(1)
  const handleClick = (id) => () => {
    setActive(id)
  }
  return (
    <div>
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
    </div>
  )
}
export default ToDoList
