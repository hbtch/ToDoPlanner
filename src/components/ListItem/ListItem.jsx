import Button from '../Button'
import IconButton from '../IconButton'
import { ListItemContainer, ListItemText } from './styled'
import { EditButton } from '../EditButton'

const ListItem = ({ task, onEdit, onRemove }) => {
  return (
    <ListItemContainer>
      <Button text="Сделать" />
      <ListItemText>{task.text}</ListItemText>
      {/* <StyledLine /> */}
      <EditButton onClick={onEdit} />
      <IconButton onClick={() => onRemove(task.id)} />
    </ListItemContainer>
  )
}

export default ListItem
