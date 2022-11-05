import React, { useState, useEffect } from 'react'

function Test() {
  const [data, setData] = useState([])
  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        console.log(response)
        return response.json()
      })
      .then(function (myJson) {
        console.log(myJson)
        setData(myJson)

        let url_string = window.location.href
        let url = new URL(url_string)
        let paramValue = url.searchParams.get('logement')
        let housing = myJson.find((data) => data.id === paramValue)
        console.log(housing)
      })
  }
  useEffect(() => {
    getData()
  }, [])
}

// export default Test

// function Test(url) {
//   const [data, setData] = useState({})

//   useEffect(() => {
//     if (!url) return

//     async function fetchData() {
//       const response = await fetch(url)

//       setData(data)
//     }

//     fetchData()
//   }, [url])

//   return { data }
// }

export default Test
