import React from 'react'
import { useFetch } from '../../utils/hooks/Hook'

function RatingScript() {
  //importation des données
  const { isLoading, data, error } = useFetch(`data.json`)

  if (isLoading) {
    return <h1>Chargement en cours</h1>
  }
  if (error) {
    return <h1>Oups! Une erreur est survenue</h1>
  }
  // définition du nombre d'étoiles de la location en fonction des données
  // reçues, de 1 à 5
  if (data.rating === '1') {
    return (
      <div className="rating">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star grey"></i>
        <i className="fa-solid fa-star grey"></i>
        <i className="fa-solid fa-star grey"></i>
        <i className="fa-solid fa-star grey"></i>
      </div>
    )
  }
  if (data.rating === '2') {
    return (
      <div className="rating">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star grey"></i>
        <i className="fa-solid fa-star grey"></i>
        <i className="fa-solid fa-star grey"></i>
      </div>
    )
  }
  if (data.rating === '3') {
    return (
      <div className="rating">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star grey"></i>
        <i className="fa-solid fa-star grey"></i>
      </div>
    )
  }
  if (data.rating === '4') {
    return (
      <div className="rating">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star grey"></i>
      </div>
    )
  }
  if (data.rating === '5') {
    return (
      <div className="rating">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
    )
  }
}

export default RatingScript
