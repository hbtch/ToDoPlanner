import { StyledButton } from '../Button/styled'

const Button = ({ text, active, onClick, disabled, color = '#F4C9B3' }) => {
  return (
    <StyledButton
      onClick={onClick}
      active={active}
      disabled={disabled}
      color={color}
    >
      {text}
    </StyledButton>
  )
}

export default Button
