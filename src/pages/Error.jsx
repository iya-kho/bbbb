import { Link } from 'react-router-dom';
import '../styles/Error.scss';

export function Error() {
  return (
    <div className="error width-margins">
      <h3>404</h3>
      <p>Oups! La page que vous demandez n’existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );}
