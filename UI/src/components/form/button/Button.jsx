import PropTypes from 'prop-types'
import Icon from '../../icon/Icon'
function Button(props) {
    const {
        prefixIcon = "",
        children,
        type = "default",
        size = "default",
        fullWidth = false
    } = props
    const typeMap = {
        "primary": "text-white bg-primary border border-solid border-primary",
        "secondary": "text-primary bg-white border border-solid border-primary",
        "default": ""
    }
    return (
        <button className={`flex justify-center gap-2 items-center rounded-full ${typeMap[type]} ${fullWidth ? 'w-full' : ''}`}>
            {prefixIcon && (
                <Icon size={size}>{prefixIcon}</Icon>
            )}
            {children}
        </button>
        
    )
}
Button.propTypes = {
    size: PropTypes.string,
    prefixIcon: PropTypes.string,
    children: PropTypes.string,
    type: PropTypes.string,
    fullWidth: PropTypes.bool
}
export default Button