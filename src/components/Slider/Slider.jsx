import ImageSlider from './ImageSlider'
import { useFetch } from '../../utils/hooks/Hook'

const Slider = () => {
  //importation des données
  const { isLoading, data, error } = useFetch(`data.json`)

  if (isLoading) {
    return <h1>Chargement en cours</h1>
  }
  if (error) {
    return <h1>Oups! Une erreur est survenue</h1>
  }
  const slides = data.pictures
  return (
    <div className="carousel">
      {/* importation du slider */}
      <ImageSlider slides={slides} />
    </div>
  )
}

export default Slider
