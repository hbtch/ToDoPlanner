export const Input = ({ value, onChange, placeholder, className }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      style={{
        backgroundColor: '#fbf6e8',
        padding: '8px',
        borderRadius: '4px',
        border: '2px solid #ccc',
        outline: 'none',
      }}
    />
  )
}
