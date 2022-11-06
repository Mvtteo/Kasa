import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState({})

  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      console.log()
      try {
        const response = await fetch(url)
        console.log('hello')

        const fullData = await response.json()

        let url_string = window.location.href
        let id = new URL(url_string)
        let paramValue = id.searchParams.get('logement')
        const data = fullData.find((data) => data.id === paramValue)

        setData(data)
      } catch (err) {
        setError(true)
      }
    }
    fetchData()
  })
  return { data, error }
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
