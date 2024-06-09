import { StyledButton } from './styled'
const Button = ({ text, active, onClick, disabled, className }) => {
  return (
    <StyledButton onClick={onClick} active={active}>
      {text}
    </StyledButton>
  )
}

export default Button
