import React from 'react'
import styled from 'styled-components'
import { useFetch } from '../../../utils/hooks/Hook'

let arrowtop = require('../../../sass/images/arrows/arrowtop.png')
let arrowtopmini = require('../../../sass/images/arrows/arrowtop-mini.png')

const Panel = styled.div`
  width: 750px;
  margin-top: 24px;
  min-height: 52px;
  @media screen and (min-width: 1921px) {
    width: 39.063vw;
  }
  @media only screen and (max-width: 1024px) {
    width: auto;
    min-height: 29.93px;
    margin-top: 20.07px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    min-height: 40px;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1440px) {
    width: 47%;
  }
`

const PanelHeading = styled.div`
  background-color: #ff6060;
  border-radius: 10px;
  height: 52px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  position: relative;
  @media screen and (min-width: 1921px) {
    height: 80px;
  }
  @media only screen and (max-width: 768px) {
    height: 29.93px;
    border-radius: 5px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    height: 40px;
    border-radius: 7.5px;
  }
`

const ToggleButtonWrapper = styled.div`
  transform: ${(props) =>
    props.isCollapsed
      ? 'rotate(0deg)'
      : 'rotate(180deg) translateX(28%) translateY(-5%)'};
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    transform: ${(props) =>
      props.isCollapsed
        ? 'rotate(0deg)'
        : 'rotate(180deg) translateX(22.5%) translateY(-5%)'};
  }
  @media screen and (min-width: 1921px) {
    height: 30.3571px;
    width: 50px;
    margin-top: 10px;
    margin-right: 20px;
    transform: ${(props) =>
      props.isCollapsed
        ? 'rotate(0deg)'
        : 'rotate(180deg) translateX(0%) translateY(-120%)'};
  }
`

const PanelContent = styled.div`
  color: #000000;
  overflow: hidden;
  width: 750px;
  background: #f7f7f7;
  border-radius: 10px;
  margin-top: -10px;
  height: ${(props) => (props.isCollapsed ? 0 : '250px')};
  @media screen and (min-width: 1921px) and (max-width: 2999px) {
    width: 39.063vw;
    height: ${(props) => (props.isCollapsed ? 0 : '330px')};
  }
  @media screen and (min-width: 3000px) {
    width: 39.063vw;
    height: ${(props) => (props.isCollapsed ? 0 : '400px')};
  }
  @media only screen and (max-width: 768px) {
    height: ${(props) => (props.isCollapsed ? 0 : '143.32px')};
    width: auto;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    height: ${(props) => (props.isCollapsed ? 0 : '220px')};
    width: auto;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1440px) {
    width: 100%;
  }
`

const PanelContentInner = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 142.6%;
  color: #ff6060;
  padding-top: 33px;
  padding-left: 20px;
  width: 700px;
  @media only screen and (max-width: 1024px) {
    width: auto;
    padding-left: 11.51px;
    padding-right: 6.71px;
    padding-top: 17.27px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    padding-top: 25px;
  }
`

const Stuff = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 142.6%;
  color: #ff6060;
  padding-top: 2px;
  padding-left: 20px;
  width: 700px;
  @media screen and (min-width: 1921px) and (max-width: 2999px) {
    font-size: 30px;
    width: 38vw;
  }
  @media screen and (min-width: 3000px) {
    font-size: 36px;
  }
  @media only screen and (max-width: 1024px) {
    width: auto;
    padding-left: 0px;
    padding-right: 6.71px;
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 16px;
  }
`

const ArrowTop = styled.div`
  background-image: url(${arrowtop});
  height: 52px;
  width: 26.4px;
  background-repeat: no-repeat;
  padding-right: 11.8px;
  margin-top: 17.79px;
  @media screen and (min-width: 1921px) {
    height: 30.3571px;
    width: 50px;
    background-size: 50px 30.3571px;
  }
  @media screen and (max-width: 768px) {
    background-image: url(${arrowtopmini});
    height: 8.96px;
    width: 15.2px;
    margin-top: 10.24px;
    padding-right: 10.72px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    background-image: url(${arrowtopmini})
    height: 8.96px;
    width: 15.2px;
    margin-top: 12px;
    padding-right: 20px;
  }
`

const Gear = () => {
  //définition des 2 états différents du dropdown
  const [isCollapsed, setIsCollapsed] = React.useState(true)

  const togglePanel = () => {
    setIsCollapsed((prevState) => !prevState)
  }
  //importation des données
  const { isLoading, data, error } = useFetch(`data.json`)

  if (isLoading) {
    return <h1>Chargement en cours</h1>
  }
  if (error) {
    return <h1>Oups! Une erreur est survenue</h1>
  }

  return (
    <Panel>
      <PanelHeading onClick={togglePanel}>
        <p>Équipements</p>
        <ToggleButtonWrapper isCollapsed={isCollapsed}>
          <ArrowTop />
        </ToggleButtonWrapper>
      </PanelHeading>
      <PanelContent isCollapsed={isCollapsed}>
        <PanelContentInner>
          {data.equipments.map((gear) => {
            return <Stuff key={gear.toString()}>{gear}</Stuff>
          })}
        </PanelContentInner>
      </PanelContent>
    </Panel>
  )
}

export default Gear
