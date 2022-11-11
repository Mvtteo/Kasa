import { useState, useEffect } from 'react'

export function useFetch(url) {
  // data&setdata utilisés pour donner les données d'un appartement précis
  const [data, setData] = useState({})

  // fullData&setFullData utilisés pour donner les données de toutes les
  // propriétés disponibles

  const [fullData, setFullData] = useState({})

  // isLoading permet d'attendre les données au chargement de la page
  const [isLoading, setLoading] = useState(true)

  //error permet d'afficher une erreur s'il y en a une
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return

    setLoading(true)

    async function fetchData() {
      try {
        const response = await fetch(url)

        //définition de fulldata
        const fullData = await response.json()
        setFullData(fullData)

        //recherche de la propriété en fonction de l'id dans l'url
        let url_string = window.location.href
        let id = new URL(url_string)
        let paramValue = id.searchParams.get('logement')
        const data = fullData.find((data) => data.id === paramValue)
        //définition de data
        setData(data)
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])
  return { isLoading, data, fullData, error }
}
