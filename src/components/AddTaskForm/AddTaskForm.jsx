import React, { useState } from 'react'
import Button from '../Button'
import { AddTaskFormContainer, StyledInput } from './styled'

export const AddTaskForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('')

  const handleTaskText = (event) => {
    setTaskText(event.target.value)
  }

  // функция submit вызывается при нажатии на кнопку "Добавить задачу"
  const submit = () => {
    const value = taskText.trim()
    if (value !== '') {
      // вызываем метод создания задачи и передаем туда содержимое инпута
      onAddTask(value)
      setTaskText('')
    } else {
      alert('Введите задачу')
    }
  }

  const isDisabled = taskText.trim() === ''

  return (
    <AddTaskFormContainer>
      <StyledInput
        value={taskText}
        onChange={handleTaskText}
        placeholder="Напиши задачу, которую нужно сделать"
      />
      <Button
        onClick={submit}
        text="Добавить новую задачу"
        disabled={isDisabled}
      />
    </AddTaskFormContainer>
  )
}
