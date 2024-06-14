import { StyledButton } from './Button/styled'
import IconButton from './Button/IconButton'
import styled from '@emotion/styled'

const StyledLine = styled.div`
  border: 1px solid #ddd;
  width: 100%;
  margin: 10px 0;
`
const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 0;
`
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
