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
      <html lang="fr">
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, viewport-fit=cover"
          />
          <title>Kasa, Location immobilière</title>
        </head>
        <body>
          <div className="banner">
            <div className="background">
              <div className="img"></div>
              <div className="background-dark"></div>
              <p>Chez vous, partout et ailleurs</p>
              <div className="background-light"></div>
            </div>
          </div>
          {/* grid */}
          <div className="greyBackground">
            <Index />
          </div>
        </body>
      </html>
    )
  )
}

export default Home
