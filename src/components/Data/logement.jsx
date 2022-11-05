import './data.json'
import RatingScript from './icon'
import CollapsablePanel from './collapsed_panel/panel'
import Gear from './collapsed_panel/gear'
// import Housing from './Import'
// import { useFetch } from './Import'
// import { useRequire } from './Import'
import React, { useState, useEffect } from 'react'
// import Grab from './Import'

// let data = require('./data.json')

// function useFetch(url) {
//     const [data, setData] = useState({})

//     const [isLoading, setLoading] = useState(true)

//     const [error, setError] = useState(false)

//     useEffect(() => {
//       if (!url) return

//       setLoading(true)

//       async function fetchData() {
//         try {
//           const response = await require(url)

//           const data = await response.json()

//           setData(data)
//         } catch (err) {
//           console.log(err)

//           setError(true)
//         } finally {
//           setLoading(false)
//         }
//       }

//       fetchData()
//     }, [url])

//     return { isLoading, data, error }
//   }

function HousingDisplay() {
  // const getData = () => {
  //   fetch('data.json', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //   })
  //     .then(function (response) {
  //       console.log(response)
  //       return response.json()
  //     })
  //     .then(function (myJson) {
  //       console.log(myJson)
  //     })
  // }
  // useEffect(() => {
  //   getData()
  // }, [])

  // let housing = []
  let data = require('./data.json')
  var url_string = window.location.href
  var url = new URL(url_string)
  var paramValue = url.searchParams.get('logement')

  const logement = paramValue

  const housing = data.find((housing) => housing.id === logement)

  return (
    <div className="page">
      <div className="topside">
        <div className="head">
          <h1>{housing.title}</h1>
          <h2>{housing.location}</h2>
          <div className="tags">
            {housing.tags.map((tags) => {
              return (
                <div className="tag" key={tags.toString()}>
                  {tags}
                </div>
              )
            })}
          </div>
        </div>
        <div className="rightside">
          <div className="host">
            <div className="name">{housing.host.name}</div>
            <img src={`${housing.host.picture}`} alt={`${housing.host.name}`}>
              {housing.name}
            </img>
          </div>
          <RatingScript />
        </div>
      </div>
      <div className="more">
        {/* <div className="description">
          <div className="topsection">
            <p>Description</p>
            <div className="arrowtop"></div>
          </div>
          <div className="bottomsection">
            <p>{housing.description}</p>
          </div>
        </div> */}
        <CollapsablePanel />
        {/* <div className="gear">
          <div className="topsection">
            <p>Équipements</p>
            <div className="arrowtop"></div>
          </div>
          <div className="bottomsection">
            {housing.equipments.map((gear) => {
              return <p key={gear.toString()}>{gear}</p>
            })}
          </div>
        </div> */}
        <Gear />
      </div>
    </div>
  )
}

// function HousingDisplay() {
//   Grab()
//   console.log(Grab)
//   return (
//     <div className="page">
//       <div className="topside">
//         <div className="head">
//           <h1>{housing.title}</h1>
//           <h2>{housing.location}</h2>
//           <div className="tags">
//             {housing.tags.map((tags) => {
//               return (
//                 <div className="tag" key={tags.toString()}>
//                   {tags}
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//         <div className="rightside">
//           <div className="host">
//             <div className="name">{housing.host.name}</div>
//             <img src={`${housing.host.picture}`} alt={`${housing.host.name}`}>
//               {housing.name}
//             </img>
//           </div>
//           <RatingScript />
//         </div>
//       </div>
//       <div className="more">
//         {/* <div className="description">
//           <div className="topsection">
//             <p>Description</p>
//             <div className="arrowtop"></div>
//           </div>
//           <div className="bottomsection">
//             <p>{housing.description}</p>
//           </div>
//         </div> */}
//         <CollapsablePanel />
//         {/* <div className="gear">
//           <div className="topsection">
//             <p>Équipements</p>
//             <div className="arrowtop"></div>
//           </div>
//           <div className="bottomsection">
//             {housing.equipments.map((gear) => {
//               return <p key={gear.toString()}>{gear}</p>
//             })}
//           </div>
//         </div> */}
//         <Gear />
//       </div>
//     </div>
//   )
// }

export default HousingDisplay
