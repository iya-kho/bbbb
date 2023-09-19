import { useLocation } from 'react-router-dom';
import { Dropdown, TagContainer } from '../components';

export function Apartment() {
  const location = useLocation();
  const apartInfo = location.state;

  return (
    <div id="apartPage" className='width-margins'>
      <div className="carousel">
        <img src={apartInfo.cover} alt="Picture of the apartment to rent" />
      </div>
      <div className="titleLocTags">
        <h3>{apartInfo.title}</h3>
        <span>{apartInfo.location}</span>
        <TagContainer content={apartInfo.tags}/>
      </div>
      <div className="hostRating">
        <span>{apartInfo.host.name}</span>
        <div className="hostPic">
          <img src={apartInfo.host.picture} alt="Photo of the host" />
        </div>
      </div>
      <div className="descriptionEquipment">
        <Dropdown title="Description" content={apartInfo.description}/>
        <Dropdown title="Équipements" content={apartInfo.equipments}/>
      </div>
    </div>
  );
}
