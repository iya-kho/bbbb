import { useLocation, useParams } from 'react-router-dom';
import { Dropdown, TagsContainer, Carousel } from '../components';
import { Error } from './Error';
import sprite from '../assets/icons/sprite.svg';
import '../styles/Apartment.scss';

export function Apartment() {
  const location = useLocation();
  const apartInfo = location.state;

  const linkParams = useParams();

  if (!apartInfo || apartInfo.id != linkParams.id) {
    return <Error />;
  }

  const maxRating = 5;
  let rating = [];

  for (let i = 0; i < maxRating; i++) {
    if (i < apartInfo.rating) {
      rating.push(
        <svg key={i}>
          <use className="star-color" href={sprite + '#svg-star'} />
        </svg>
      );
    } else {
      rating.push(
        <svg key={i}>
          <use key={i} href={sprite + '#svg-star'} />
        </svg>
      );
    }
  }

  const nameSplit = apartInfo.host.name.split(' ');

  return (
    <div className="apartPage width-margins">
      <Carousel pics={apartInfo.pictures} />
      <div className="apartInfo">
        <div className="apartInfo-titleLocTags">
          <h3>{apartInfo.title}</h3>
          <div className="location">{apartInfo.location}</div>
          <TagsContainer content={apartInfo.tags} />
        </div>
        <div className="apartInfo-hostRating">
          <div className="apartInfo-hostInfo">
            <div className="hostName">
              <span>{nameSplit[0]}</span>
              <span>{nameSplit[1]}</span>
            </div>
            <div className="hostPic-wrap">
              <img src={apartInfo.host.picture} alt="Photo of the host" />
            </div>
          </div>
          <div className="apartInfo-rating">{rating}</div>
        </div>
      </div>
      <div className="descriptionEquipment">
        <Dropdown size="medium" title="Description" content={apartInfo.description} />
        <Dropdown size="medium" title="Équipements" content={apartInfo.equipments} />
      </div>
    </div>
  );
}
