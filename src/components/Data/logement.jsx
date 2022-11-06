import RatingScript from './icon'
import CollapsablePanel from './collapsed_panel/panel'
import Gear from './collapsed_panel/gear'
import { useFetch } from './test'

function HousingDisplay() {
  const { data, error } = useFetch(`data.json`)
  console.log(data)
  if (error) {
    return <h1>Oups, il y a eu un problème</h1>
  } else {
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
            <RatingScript />
          </div>
        </div>
        <div className="more">
          <CollapsablePanel />
          <Gear />
        </div>
      </div>
    )
  }
}

export default HousingDisplay
