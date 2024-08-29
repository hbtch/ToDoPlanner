import React, { useState } from 'react'
import Button from '../Button'
import IconButton from '../IconButton'
import { ListItemContainer, ListItemText, EditableInput } from './styled'
import { EditButton } from '../EditButton'

const ListItem = ({ task, onEdit, onRemove }) => {
  //создаем состояние для управления режимом редактирования
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(task.text)

  //создаем функцию для изменения текста в режиме рдактирования
  const handleTextChange = (e) => {
    setEditedText(e.target.value)
  }

  //создаем функцию для сохранения изменений
  const handleSave = () => {
    onEdit(task.id, editedText)
    setIsEditing(false) //выход из режима редактирования
  }

  //переключение режима редактирования при нажатии на кнопку изменить
  const toggleEdit = () => {
    setIsEditing(!isEditing)
  }
  return (
    <ListItemContainer>
      <Button text="Сделать" />
      {isEditing ? (
        <EditableInput
          value={editedText}
          onChange={handleTextChange}
          onBlur={handleSave} // Сохранение при потере фокуса
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSave() // Сохранение при нажатии Enter
          }}
          autoFocus
        />
      ) : (
        <ListItemText>{task.text}</ListItemText>
      )}

      {/* <StyledLine /> */}
      <EditButton onClick={toggleEdit} />
      <IconButton onClick={() => onRemove(task.id)} />
    </ListItemContainer>
  )
}

export default ListItem
