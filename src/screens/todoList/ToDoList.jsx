import React, { useState } from 'react'
import Button from '../../components/Button'
import { Header, StatusSelector } from './styled'
import ListItem from '../../components/ListItem'

const ToDoList = () => {
  const [active, setActive] = useState(1)
  const handleClick = (id) => () => {
    setActive(id)
  }
  return (
    <div>
      <Header>
        <img src="/bee-left.png" alt="LeftBeeImage" className="small-icon" />
        <h1>To Do List</h1>
        <img src="/bee-right.png" alt="LeftBeeImage" className="small-icon" />
      </Header>
      <StatusSelector>
        <br />
        <Button
          active={active === 1}
          onClick={handleClick(1)}
          text="Сделать"
        ></Button>

        <Button
          active={active === 2}
          onClick={handleClick(2)}
          text="В работе"
        ></Button>

        <Button
          active={active === 3}
          onClick={handleClick(3)}
          text="Готово"
        ></Button>
      </StatusSelector>
      <div>
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  )
}
export default ToDoList
