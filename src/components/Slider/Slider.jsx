import './data.json'
import ImageSlider from './ImageSlider'

let data = require('./data.json')

var url_string = window.location.href
var url = new URL(url_string)
var paramValue = url.searchParams.get('logement')

const logement = paramValue

const housing = data.find((housing) => housing.id === logement)

const Test = () => {
  const slides = housing.pictures
  return (
    <div className="carousel">
      <ImageSlider slides={slides} />
    </div>
  )
}

export default Test
