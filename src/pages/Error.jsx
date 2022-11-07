import { Link } from 'react-router-dom'
import './css/Error.css'

function Error() {
  return (
    <div className="error">
      <div className="img"></div>
      <p>
        Oups! La page que <br />
        vous demandez n'existe pas.
      </p>
      {/* lien de redirection vers la page d'accueil */}
      <Link className="home" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
