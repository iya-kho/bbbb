import { PropTypes } from 'prop-types';
import '../styles/TagsContainer.scss';

export function TagsContainer({ content }) {
  const items = [].concat(content);
  return (
    <div className="tagsContainer">
      {items.map((item, index) => (
        <div key={item + index} className='tagsContainer-item'>{item}</div>
      ))}
    </div>
  );
}

TagsContainer.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};


