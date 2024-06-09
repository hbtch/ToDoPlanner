import { StyledButton } from '../../components/Button/styled'
import React, { useState } from 'react'

const ToDoList = () => {
  const [active, setActive] = useState(1)
  const handleClick = (id) => () => {
    setActive(id)
  }
  return (
    <div>
      <StyledButton
        text="Сделать"
        active={active === '1'}
        onClick={handleClick('1')}
      />
    </div>
  )
}
export default ToDoList
