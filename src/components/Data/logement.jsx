import './data.json'
import RatingScript from './icon'
import CollapsablePanel from './collapsed_panel/panel'
import Gear from './collapsed_panel/gear'

// let data = require('./data.json')

// var url_string = window.location.href
// var url = new URL(url_string)
// var paramValue = url.searchParams.get('logement')

// const logement = paramValue

// const housing = data.find((housing) => housing.id === logement)

function HousingDisplay(id) {
  var url_string = window.location.href
  console.log(url_string)
  var url = new URL(url_string)
  id = url.searchParams.get('logement')
  console.log(id)
  let donnees = require('./data.json')
  let housing = donnees.find((data) => data.id === id)
  return (
    <div className="page">
      <div className="topside">
        <div className="head">
          <h1>{housing.title}</h1>
          <h2>{housing.location}</h2>
          <div className="tags">
            {housing.tags.map((tags) => {
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
            <div className="name">{housing.host.name}</div>
            <img src={`${housing.host.picture}`} alt={`${housing.host.name}`}>
              {housing.name}
            </img>
          </div>
          <RatingScript />
        </div>
      </div>
      <div className="more">
        {/* <div className="description">
          <div className="topsection">
            <p>Description</p>
            <div className="arrowtop"></div>
          </div>
          <div className="bottomsection">
            <p>{housing.description}</p>
          </div>
        </div> */}
        <CollapsablePanel />
        {/* <div className="gear">
          <div className="topsection">
            <p>Équipements</p>
            <div className="arrowtop"></div>
          </div>
          <div className="bottomsection">
            {housing.equipments.map((gear) => {
              return <p key={gear.toString()}>{gear}</p>
            })}
          </div>
        </div> */}
        <Gear />
      </div>
    </div>
  )
}

export default HousingDisplay
