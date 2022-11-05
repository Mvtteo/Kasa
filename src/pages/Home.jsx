import './css/Style.css'
import React, { useEffect } from 'react'
import Index from '../components/Data/index'

function Title() {
  useEffect(() => {
    document.title = 'Kasa, locations immobilières'
  })
}
function Home() {
  return (
    Title(),
    (
      <div className="el">
        <div className="banner">
          <div className="img"></div>
          <div className="background-dark"></div>
          <p>
            {/* <span>Chez vous,</span> partout et ailleurs */}
            Chez vous, partout et ailleurs
          </p>
        </div>
        {/* grid */}
        <div className="greyBackground">
          <Index />
        </div>
      </div>
    )
  )
}

export default Home
