import '../styles/Banner.scss';
import { PropTypes } from 'prop-types';

export function Banner({ className }) {
  return (
    <div className={'banner ' + className }>
    </div>
  );
}

Banner.propTypes = {
  className: PropTypes.string,
};
