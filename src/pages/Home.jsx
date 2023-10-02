import { ApartCard, Banner } from '../components';
import { apartmentsData } from '../data/apartmentsData.js';
import '../styles/Home.scss';

export function Home() {
  return (
    <main className="width-margins">
      <h1>Appartements à louer</h1>
      <Banner className="banner-home"/>
      <section id="apartsContainer">
        {apartmentsData.map(item => (
          <ApartCard key={item.id} apartInfo={item} />
        ))}
      </section>
    </main>
  );
}
