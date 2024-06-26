import styled from '@emotion/styled'

export const StyledButton = styled.button`
  background-color: ${(props) => {
    if (props.active) {
      return 'red'
    }
    return props.color
  }};
  color: black;
  margin: 20px;
  padding: 10px 30px;
  border-radius: 18px;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
  }
`
