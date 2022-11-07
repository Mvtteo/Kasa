import RatingScript from './icon'
import CollapsablePanel from './collapsed_panel/panel'
import Gear from './collapsed_panel/gear'
import { useFetch } from '../../utils/hooks/Hook'

function HousingDisplay() {
  //importation des données
  const { isLoading, data, error } = useFetch(`data.json`)

  if (isLoading) {
    return <h1>Chargement en cours</h1>
  }
  if (error) {
    return <h1>Oups! Une erreur est survenue</h1>
  }
  return (
    <div className="page">
      <div className="topside">
        <div className="head">
          <h1>{data.title}</h1>
          <h2>{data.location}</h2>
          <div className="tags">
            {data.tags.map((tags) => {
              return (
                <div className="tag" key={tags.toString()}>
                  {tags}
                </div>
              )
            })}
          </div>
        </div>
        <div className="rightside">
          <div className="host">
            <div className="name">{data.host.name}</div>
            <img src={`${data.host.picture}`} alt={`${data.host.name}`}>
              {data.name}
            </img>
          </div>
          {/* importation des étoiles de notations */}
          <RatingScript />
        </div>
      </div>
      <div className="more">
        {/* importation des panels */}
        <CollapsablePanel />
        <Gear />
      </div>
    </div>
  )
}

export default HousingDisplay
