import './css/Style.css'
import React from 'react'
import Index from '../components/Cards/index'

//fonction d'affichage de l'écran d'accueil
function Home() {
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
