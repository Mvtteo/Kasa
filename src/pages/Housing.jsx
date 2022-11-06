import './css/housing.css'
import Slider from '../components/Slider/Slider'
import HousingDisplay from '../components/Housing/logement'

function Housing() {
  return (
    <div className="body">
      {/* importation du slider d'images et de la fonction permettant
      la page de la location */}
      <Slider />
      <HousingDisplay />
    </div>
  )
}

export default Housing
