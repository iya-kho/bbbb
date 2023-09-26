import { PropTypes } from 'prop-types';
import sprite from '../assets/icons/sprite.svg';
import '../styles/Dropdown.scss';

export function Dropdown({ size, title, content }) {
  const items = [].concat(content);
  return (
    <div
      className={screen.availWidth > 650 ? `dropdown dropdown_${size}` : 'dropdown dropdown_small'}
    >
      <div className="dropdown-title">
        <span>{title}</span>
        <svg>
          <use href={sprite + '#svg-arrow'} />
        </svg>
      </div>
      <div className="dropdown-content">
        {items.map((item, index) => (
          <span key={item + index}>{item}</span>
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
