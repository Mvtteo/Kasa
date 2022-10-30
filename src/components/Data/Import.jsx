import './data.json'

// function Test() {
//   let data = require('./data.json')

//   var url_string = window.location.href
//   var url = new URL(url_string)
//   var paramValue = url.searchParams.get('logement')

//   const logement = paramValue
// }

// export default Test

// export const housing = data.find((housing) => housing.id === logement)

function Grab(id) {
  var url_string = window.location.href
  console.log(url_string)
  var url = new URL(url_string)
  id = url.searchParams.get('logement')
  console.log(id)
  function db(data) {
    let donnees = require('./data.json')
    data = donnees.find((housing) => housing.id === id)
  }
  db()
}

// function grab (){
//   var url_string = window.location.href
//   var url = new URL(url_string)
//   id = url.searchParams.get('logement')

//
// }

// const db = async (grab) => {
//   await grab
//   grab()
//   let donnees = require('./data.json')
//   var data = donnees.find((housing) => housing.id === id)
// }
// db()

export default Grab
