import { PropTypes } from 'prop-types';
import { useState } from 'react';
import sprite from '../assets/icons/sprite.svg';
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
        <svg>
          <use href={sprite + '#svg-arrow'} />
        </svg>
      </span>
      <span
        className={pics.length > 1 ? 'arrow arrow-forward active' : 'arrow arrow-forward'}
        onClick={() => clickForward()}
      >
        <svg>
          <use href={sprite + '#svg-arrow'} />
        </svg>
      </span>
      <div className="carousel-container">
        {pics.map((pic, index) => (
          <div
            key={pic + index}
            className={index === activePicIndex ? 'carousel-slide active' : 'carousel-slide'}
          >
            <span
              className={
                pics.length > 1 && screen.availWidth > 650 ? 'pic-number active' : 'pic-number'
              }
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
