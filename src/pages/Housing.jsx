import './css/housing.css'
import Slider from '../components/Slider/Slider'
import HousingDisplay from '../components/Housing/logement'
import Loader from '../components/loader/loader'
import { useFetch } from '../utils/hooks/Hook'

function Housing() {
  const { isLoading, error } = useFetch(`data.json`)

  if (isLoading) {
    return <Loader />
  }
  if (error) {
    return <div className="error">Oups! Une erreur est survenue...</div>
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
