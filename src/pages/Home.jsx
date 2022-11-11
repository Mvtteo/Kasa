import './css/Style.css'
import React from 'react'
import Index from '../components/Cards/index'
import Loader from '../components/loader/loader'
import { useFetch } from '../utils/hooks/Hook'

//fonction d'affichage de l'écran d'accueil
function Home() {
  const { isLoading, error } = useFetch(`data.json`)
  if (isLoading) {
    return <Loader />
  }
  if (error) {
    return <div className="error">Oups! une erreur est survenue...</div>
  }
  return (
    <div className="el">
      {/* affichage de la banniere située en haut du site */}
      <div className="banner">
        <div className="img"></div>
        <div className="background-dark"></div>
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div className="greyBackground">
        {/* importation de la map des propriétés */}
        <Index />
      </div>
    </div>
  )
}

export default Home
