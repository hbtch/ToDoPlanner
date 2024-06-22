import { StyledButton } from '../Button/styled'

const Button = ({ text, active, onClick, disabled, className }) => {
  return (
    <StyledButton onClick={onClick} active={active} disabled={disabled}>
      {text}
    </StyledButton>
  )
}

export default Button
