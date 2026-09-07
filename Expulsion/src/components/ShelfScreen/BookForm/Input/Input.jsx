import './Input.css'

const Input = ({className, ...props}) => {
    return (
        <input className={`input ${className ? className : ''}`} {...props}/>
    )
}

export default Input

