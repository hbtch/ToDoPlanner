import styled from '@emotion/styled'

export const StyledButton = styled.button`
  background-color: ${(props) => (props.active ? '#ffb6c1' : '#ffc0cb')};
  color: black;
  margin: 10px;
  padding: 10px 40px;
  border-radius: 18px;
  &:hover {
    background-color: ${(props) => (props.active ? '#ffa07a' : '#ff69b4')};
  }
`
