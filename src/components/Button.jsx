
function Button({type, disabled, text}){

    return(
           <button type={type} disabled={disabled}>{text}</button>
    )
}
export default Button;