import styled from '@emotion/styled'

export const StyledButton = styled.button`
  background-color: ${(props) => {
    if (props.active) {
      return '#FB9D77'
    }
    if (props.disabled) {
      return '#F4C9B3'
    }
    return props.color
  }};
  color: black;
  margin: 20px;
  padding: 10px 30px;
  border: none;
  border-radius: 18px;
  cursor: ${(props) => {
    if (!props.disabled) {
      return 'pointer'
    }
  }};
  &:hover {
    box-shadow: ${(props) => {
      if (!props.disabled) {
        return 'inset 0 0 100px 100px rgba(255, 255, 255, 0.1)'
      }
    }};
  }
`
