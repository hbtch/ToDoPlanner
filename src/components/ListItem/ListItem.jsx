import Button from '../Button'
import IconButton from '../IconButton'
import { ListItemContainer, StyledLine } from './styled'
import { EditButton } from '../EditButton'

const ListItem = () => {
  return (
    <div>
      <ListItemContainer>
        <Button text="Сделать" />
        <StyledLine />
        <EditButton />
        <IconButton />
      </ListItemContainer>
    </div>
  )
}

export default ListItem
