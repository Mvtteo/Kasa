import './css/housing.css'
import Slider from '../components/Slider/Slider'
import HousingDisplay from '../components/Housing/logement'
import { useFetch } from '../utils/hooks/Hook'

function Housing() {
  const { isLoading } = useFetch(`data.json`)
  console.log(isLoading)
  if (isLoading) {
    return <div className="loader">
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  }
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
