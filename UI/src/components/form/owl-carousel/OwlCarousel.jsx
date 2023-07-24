import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
function OwlCarousel(props) {
  const {
    children = <>Items not found</>,
    className = "",
    controls = true,
  } = props;
  const carouselElement = useRef(null);
  var hovered = false;
  const mouseEntered = () => {
    hovered = true;
  };
  const mouseLeft = () => {
    hovered = false;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hovered) {
        carouselElement.current.firstElementChild.classList.add(
          "!w-0",
          "!mr-0",
          "!opacity-0"
        );
        setTimeout(() => {
          const firstChild = carouselElement.current.firstElementChild;
          if (firstChild) {
            carouselElement.current.removeChild(firstChild);
            carouselElement.current.appendChild(firstChild);
            carouselElement.current.lastElementChild.classList.remove(
              "!w-0",
              "!mr-0",
              "!opacity-0"
            );
          }
        }, 1000);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className={`relative overflow-hidden w-fit m-auto`}>
      <div
        onMouseEnter={mouseEntered}
        onMouseLeave={mouseLeft}
        ref={carouselElement}
        className={`${className} transition-all ${
          controls && "mx-12"
        } duration-1000 flex grow min-w-0 relative overflow-hidden`}
      >
        {children}
      </div>
      {controls && (
        <div className="flex justify-between absolute items-center w-full top-0 bottom-0">
          <i className="material-symbols-outlined p-1 rounded-full border border-solid border-gray-400">
            navigate_before
          </i>
          <i className="material-symbols-outlined p-2 rounded-full border border-solid border-gray-400">
            navigate_next
          </i>
        </div>
      )}
    </div>
  );
}
OwlCarousel.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  controls: PropTypes.bool,
};
export default OwlCarousel;
