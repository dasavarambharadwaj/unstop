import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react';
function OwlCarousel(props) {
    const {
        children = (<>Items not found</>),
        className = ""
    } = props
    const carouselElement = useRef(null)
    var hovered = false
    const mouseEntered = () => {
        hovered = true
    }
    const mouseLeft = () => {
        hovered = false
    }
    useEffect(() => {
        const interval = setInterval(() => {
            if(!hovered) {
                carouselElement.current.firstElementChild.classList.add("w-0", "mr-0", "opacity-0")
                setTimeout(() => {
                    const firstChild = carouselElement.current.firstElementChild
                    if(firstChild) {
                        carouselElement.current.removeChild(firstChild)
                        carouselElement.current.appendChild(firstChild)
                        carouselElement.current.lastElementChild.classList.remove("w-0", "mr-0", "opacity-0")
                    }
                }, 1000);
            }
        }, 3000);
        return () => {
            clearInterval(interval)
        }
    })
    return (
        <div
            onMouseEnter={mouseEntered}
            onMouseLeave={mouseLeft}
            ref={carouselElement} className={`${className} transition-all duration-1000 flex grow min-w-0 overflow-hidden`}>
                <div className='first-child absolute w-60'></div>
                {children}
        </div>
    )
}
OwlCarousel.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string
}
export default OwlCarousel