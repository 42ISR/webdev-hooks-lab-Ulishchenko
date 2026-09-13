import './Checkbox.css'

const CheckBox = ({checked, onChange, id}) => {
    return (
        <input className="checkbox" type="checkbox" checked={checked} onChange={onChange} id={id}/>
    )
}

export default CheckBox

