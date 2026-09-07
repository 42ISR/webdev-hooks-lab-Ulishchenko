import CheckBox from '../BookForm/Checkbox/Checkbox'
import './FilterChip.css'

const FilterChip = ({checked, onChange}) => {
    return (
        <div className="filter-chip">
            <CheckBox checked={checked} onChange={onChange} id="filterCheckbox"/>
            <label htmlFor="filterCheckbox"><span className="dot"></span>Только непрочитанные</label>
        </div>
    )
}


export default FilterChip
