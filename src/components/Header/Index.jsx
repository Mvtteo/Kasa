import { Link } from "react-router-dom"
import "./header.css"

function Header() {
  return (
    <header>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:100"
        rel="stylesheet"
      />
      <div className="logo"></div>
      <nav>
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
