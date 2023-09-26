import '../styles/Header.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import sprite from '../assets/icons/sprite.svg';

export function Header() {
  const pathName = useLocation().pathname;

  return (
    <header className="width-margins">
      <svg>
        <use className="logo" href={sprite + '#svg-logo'} />
      </svg>
      <nav>
        <Link to="/" className={pathName === '/' ? 'active' : ''}>
          Accueil
        </Link>
        <Link to="/about" className={pathName === '/about' ? 'active' : ''}>
          A Propos
        </Link>
      </nav>
    </header>
  );
}
