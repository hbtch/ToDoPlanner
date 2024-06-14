import styled from '@emotion/styled'

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
`
export const StyledButton = styled.button`
  background-color: ${(props) => (props.active ? '#ffb6c1' : '#ffc0cb')};
  color: black;
  margin: 20px;
  padding: 10px 40px;
  border-radius: 18px;
  &:hover {
    background-color: ${(props) => (props.active ? '#ffa07a' : '#ff69b4')};
  }
`
export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  h1 {
    text-align: center;
  }
  .small-icon {
    width: 100px;
    height: 100px;
    margin: 0 10px;
  }
`
export const StyledIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .trash-bin {
    width: 100%;
    height: 100%;
  }
`
