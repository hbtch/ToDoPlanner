import StyledButton from '../Button'
import IconButton from '../IconButton'
import { ListItemContainer, StyledLine } from './styled'

const ListItem = () => {
  return (
    <div>
      <ListItemContainer>
        <StyledButton text="Сделать"></StyledButton>
        <StyledLine />
        <StyledButton text="Изменить"></StyledButton>
        <IconButton />
      </ListItemContainer>
    </div>
  )
}

export default ListItem
