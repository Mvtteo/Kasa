import './data.json'
import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState({})

  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return

    async function fetchData() {
      try {
        const response = await fetch(url)

        setData(data)
      } catch (err) {
        console.log(err)

        setError(true)
      }
    }

    fetchData()
  }, [url])

  return { data, error }
}

// function Grab(housing) {
//   let data = require('./data.json')
//   console.log(data)

//   var url_string = window.location.href
//   var url = new URL(url_string)
//   var paramValue = url.searchParams.get('logement')

//   let db = require('./data.json')
//   housing = db.find((data) => data.id === paramValue)
//   console.log(paramValue)
// }

// export default Grab

// const logement = paramValue

// const housing = data.find((housing) => housing.id === logement)
// return housing

// function Grab(id) {
//   var url_string = window.location.href
//   console.log(url_string)
//   var url = new URL(url_string)
//   id = url.searchParams.get('logement')
//   console.log(id)
//   function db(data) {
//     let donnees = require('./data.json')
//     data = donnees.find((housing) => housing.id === id)
//   }
//   db()
// }

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
