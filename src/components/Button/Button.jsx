const Button = (props) => {
    return (
        <button
        onClick={props.onClick}
        disabled={props.disabled}
        className={props.className}>
        </button>
    )
}

export default Button;