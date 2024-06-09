import Button from './Button'
import styled from '@emotion/styled'

export const StyledButton = styled(Button)`
  background-color: ${(props) => (props.active ? '#ffb6c1' : '#ffc0cb')};
  color: black;
  margin: 10px;
  border-radius: 18px;
  &:hover {
    background-color: ${(props) => (props.active ? '#ffa07a' : '#ff69b4')};
  }
`
