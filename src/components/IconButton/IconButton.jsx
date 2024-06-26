import { StyledIcon } from '../IconButton/styled'

const IconButton = ({ active, onClick }) => {
  return (
    <StyledIcon active={active} onClick={onClick}>
      <img src="/trash-bin.png" alt="trash-bin" className="trash-bin" />
    </StyledIcon>
  )
}

export default IconButton
