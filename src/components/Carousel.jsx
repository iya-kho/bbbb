import { PropTypes } from 'prop-types';
import { useState } from 'react';
import '../styles/Carousel.scss';

export function Carousel({ pics }) {
  const [activePicIndex, updateActivePicIndex] = useState(0);
  function clickBack() {
    if (activePicIndex === 0) {
      updateActivePicIndex(pics.length - 1);
    } else {
      updateActivePicIndex(activePicIndex - 1);
    }
  }

  function clickForward() {
    if (activePicIndex === pics.length - 1) {
      updateActivePicIndex(0);
    } else {
      updateActivePicIndex(activePicIndex + 1);
    }
  }

  return (
    <div className="carousel">
      <span
        className={pics.length > 1 ? 'arrow arrow-back active' : 'arrow arrow-back'}
        onClick={() => clickBack()}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.7897 10.7897C15.4591 10.1202 16.5462 10.1202 17.2157 10.7897L27.4979 21.0719C28.1674 21.7414 28.1674 22.8285 27.4979 23.4979C26.8285 24.1673 25.7414 24.1673 25.072 23.4979L16 14.4259L6.92804 23.4926C6.25862 24.162 5.17148 24.162 4.50206 23.4926C3.83265 22.8231 3.83265 21.736 4.50206 21.0666L14.7843 10.7843L14.7897 10.7897Z"
            fill="black"
          />
        </svg>
      </span>
      <span
        className={pics.length > 1 ? 'arrow arrow-forward active' : 'arrow arrow-forward'}
        onClick={() => clickForward()}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.7897 10.7897C15.4591 10.1202 16.5462 10.1202 17.2157 10.7897L27.4979 21.0719C28.1674 21.7414 28.1674 22.8285 27.4979 23.4979C26.8285 24.1673 25.7414 24.1673 25.072 23.4979L16 14.4259L6.92804 23.4926C6.25862 24.162 5.17148 24.162 4.50206 23.4926C3.83265 22.8231 3.83265 21.736 4.50206 21.0666L14.7843 10.7843L14.7897 10.7897Z"
            fill="black"
          />
        </svg>
      </span>
      <div className="carousel-container">
        {pics.map((pic, index) => (
          <div
            key={pic + index}
            className={index === activePicIndex ? 'carousel-slide active' : 'carousel-slide'}
          >
            <span
              className={(pics.length > 1) && (screen.availWidth > 650) ? 'pic-number active' : 'pic-number'}
            >
              {activePicIndex + 1 + '/' + pics.length}
            </span>
            <img src={pic} alt="Photo of the property" />
          </div>
        ))}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  pics: PropTypes.array,
};
