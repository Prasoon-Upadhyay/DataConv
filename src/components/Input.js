 
function Input({children,  ...rest})
{    
    return <input {...rest}  placeholder = {children} className = "border-0 border-b border-white " />
}
export default Input;