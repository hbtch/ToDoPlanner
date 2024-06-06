const Button = ({ text, active, onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${active ? 'active' : ''}`}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
