import './css/about.css'
import Fiabilité from '../components/dropdown/DropdownFiabilité'
import Respect from '../components/dropdown/DropdownRespect'
import Service from '../components/dropdown/DropdownService'
import Sécurité from '../components/dropdown/DropdownSécurité'

function About() {
  return (
    <div id="page">
      <div id="topimg">
        <div className="img" alt="kalen-emsley"></div>
        <div className="darken"></div>
      </div>
      <Fiabilité />
      <Respect />
      <Service />
      <Sécurité />
    </div>
  )
}

export default About
