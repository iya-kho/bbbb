import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import '../styles/ApartCard.scss';

export function ApartCard({ apartInfo }) {
  return (
    <Link to={`apartment/${apartInfo.id}`} state={apartInfo}>
      <article className="apartCard">
        <img src={apartInfo.cover} alt="Picture of the apartment to rent" />
        <h2>{apartInfo.title}</h2>
      </article>
    </Link>
  );
}

ApartCard.propTypes = {
  apartInfo: PropTypes.object,
};
