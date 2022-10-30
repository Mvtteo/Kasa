import { Link } from 'react-router-dom'
import './style.css'

function Error() {
  return (
    <div className="error">
      <div className="img"></div>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link className="home" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
