import { PropTypes } from 'prop-types';

export function TagContainer({ content }) {
  const items = [].concat(content);
  return (
    <div className="tagsContainer">
      {items.map((item, index) => (
        <span key={item + index}>{item}</span>
      ))}
    </div>
  );
}

TagContainer.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};


