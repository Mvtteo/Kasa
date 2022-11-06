import './cards.css'
import { Link } from 'react-router-dom'
import { useFetch } from '../../utils/hooks/Hook'

function Index() {
  //importation des données
  const { isLoading, fullData, error } = useFetch(`data.json`)

  if (isLoading) {
    return <h1>Chargement en cours</h1>
  }
  if (error) {
    return <h1>Oups! Une erreur est survenue</h1>
  }
  return (
    <div id="grid">
      {/* map des différentes cartes de chaque propriétés */}
      {fullData.map((data) => {
        return (
          <Link
            className="square"
            key={`${data.title}`}
            // lien vers la page de la propriété
            to={`Fiche_logement?logement=${data.id}`}
          >
            <img src={`${data.cover}`} alt={`${data.title}`}></img>
            <div className="title">{data.title}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Index
