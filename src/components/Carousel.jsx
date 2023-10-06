import { PropTypes } from 'prop-types';
import { useState, useEffect } from 'react';
import sprite from '../assets/icons/sprite.svg';
import '../styles/Carousel.scss';

export function Carousel({ pics }) {
  const [activePicIndex, updateActivePicIndex] = useState(0);

  useEffect(() => {
    const slideTimeout = setTimeout(moveForward, 4000);

    return () => {
      clearTimeout(slideTimeout);
    };
  }, [activePicIndex]);

  function moveBack() {
    if (activePicIndex === 0) {
      updateActivePicIndex(pics.length - 1);
    } else {
      updateActivePicIndex(activePicIndex - 1);
    }
  }

  function moveForward() {
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
        onClick={() => moveBack()}
      >
        <svg>
          <use href={sprite + '#svg-arrow'} />
        </svg>
      </span>
      <span
        className={pics.length > 1 ? 'arrow arrow-forward active' : 'arrow arrow-forward'}
        onClick={() => moveForward()}
      >
        <svg>
          <use href={sprite + '#svg-arrow'} />
        </svg>
      </span>
      <div className="carousel-container">
        {pics.map((pic, index) => (
          <div
            key={pic + index}
            className={index === activePicIndex ? `carousel-slide active` : `carousel-slide`}
          >
            <img src={pic} alt="Photo of the property" />
          </div>
        ))}
      </div>
      <span
        className={pics.length > 1 && screen.availWidth > 650 ? 'pic-number active' : 'pic-number'}
      >
        {activePicIndex + 1 + '/' + pics.length}
      </span>
    </div>
  );
}

Carousel.propTypes = {
  pics: PropTypes.array,
};
