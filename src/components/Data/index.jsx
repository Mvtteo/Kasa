import './Data.css'
import { Link } from 'react-router-dom'

let data = require('./data.json')

function Index() {
  return (
    <div id="grid">
      {data.map((data) => {
        return (
          <Link className="square" to={`Fiche_logement?logement=${data.id}`}>
            <img src={`${data.cover}`} alt={`${data.title}`}></img>
            <div className="title">{data.title}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Index
