import PropTypes from 'prop-types'
import Icon from '../../icon/Icon'
function Input(props) {
    const {
        prefixIcon = "",
        placeholder = ""
    } = props
    return (
        <div className='relative'>
            {prefixIcon && (
                <Icon className='absolute top-3.5 left-2' size="small" >{prefixIcon}</Icon>
            )}
            <input type="text" placeholder={placeholder}
                className={`bg-transparent border border-solid bg-gray-50 rounded-lg p-2 border-gray-200 ${prefixIcon ? "pl-7" : ''} pr-2 text-primary outline-primary`}>
            </input>
            
        </div>
        
    )
}
Input.propTypes = {
    size: PropTypes.string,
    prefixIcon: PropTypes.string,
    placeholder: PropTypes.string
}
export default Input