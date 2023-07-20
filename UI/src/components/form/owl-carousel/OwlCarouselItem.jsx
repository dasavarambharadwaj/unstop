import PropTypes from 'prop-types'
function OwlCarouselItem(props) {
    const {
        children = (<>Items not found</>),
        className = ""
    } = props
    return (
        <div className={`${className} shrink-0 transition-all duration-1000 ease-linear mr-5 owl-carousel-item`}>
            {children}
        </div>
    )
}
OwlCarouselItem.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string
}
export default OwlCarouselItem