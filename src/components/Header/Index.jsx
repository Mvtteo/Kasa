import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <header>
      <div className="logo"></div>
      <nav>
        {/* différents liens de navigation */}
        <Link className="accueil" to="/">
          Accueil
        </Link>
        <Link className="about" to="/Apropos">
          A Propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
