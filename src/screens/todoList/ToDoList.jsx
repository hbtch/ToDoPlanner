import React, { useState } from 'react'
import Button from '../../components/Button'
import { Header, StatusSelector } from './styled'
import ListItem from '../../components/ListItem'

const items = Array.from({ length: 10 }, (_, index) => <ListItem key={index} />)

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
          color="#FB9D77"
        />

        <Button
          active={active === 2}
          onClick={handleClick(2)}
          text="В работе"
        />

        <Button
          active={active === 3}
          onClick={handleClick(3)}
          text="Готово"
          color="#BF7654"
        />
      </StatusSelector>

      <div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ToDoList
