import { StyledButton } from './styled'
const Button = ({ text, active, onClick, disabled, className }) => {
  return (
    <StyledButton
      onClick={onClick}
      className={`${className} ${active ? 'active' : ''}`}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  )
}

export default Button
