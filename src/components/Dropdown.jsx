import { PropTypes } from 'prop-types';
import { useState } from 'react';
import sprite from '../assets/icons/sprite.svg';
import '../styles/Dropdown.scss';

export function Dropdown({ size, title, content }) {
  const items = [].concat(content);

  const [state, updateState] = useState('closed');

  function changeState() {
    if (state === 'closed') {
      updateState('open');
    } else {
      updateState('closed');
    }
  }

  let dropdownClass;

  if (screen.availWidth > 650 && state === 'open') {
    dropdownClass = `dropdown dropdown_${size} open`;
  }

  if (screen.availWidth > 650 && state !== 'open') {
    dropdownClass = `dropdown dropdown_${size}`;
  }

  if (screen.availWidth <= 650 && state === 'open') {
    dropdownClass = 'dropdown dropdown_small open';
  }

  if (screen.availWidth <= 650 && state !== 'open') {
    dropdownClass = 'dropdown dropdown_small';
  }

  return (
    <div className={dropdownClass}>
      <div className="dropdown-title">
        <span>{title}</span>
        <svg onClick={() => changeState()}>
          <use href={sprite + '#svg-arrow'} />
        </svg>
      </div>
      <div className="dropdown-content">
        {items.map((item, index) => (
          <p key={item + index}>{item}</p>
        ))}
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
