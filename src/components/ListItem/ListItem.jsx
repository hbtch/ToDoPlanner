import { StyledButton } from '../Button'
import { IconButton } from '../IconButton'
import { ListItemContainer, StyledLine } from '../ListItem/styled'

const ListItem = () => {
  return (
    <div>
      <ListItemContainer>
        <StyledButton>Сделать</StyledButton>
        <StyledLine />
        <StyledButton>Изменить</StyledButton>
        <IconButton />
      </ListItemContainer>
    </div>
  )
}

export default ListItem
