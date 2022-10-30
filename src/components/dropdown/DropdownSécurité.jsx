import React from 'react'
import styled from 'styled-components'
import './arrows/arrowtop.png'

let arrowtop = require('./arrows/arrowtop.png')

const Panel = styled.div`
  width: 1363px;
  min-height: 47px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${(props) => (props.isCollapsed ? '31px' : '33px')};
`

const PanelHeading = styled.div`
  background-color: #ff6060;
  border-radius: 10px;
  height: 47px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  position: relative;
`

const ToggleButtonWrapper = styled.div`
  transform: ${(props) =>
    props.isCollapsed
      ? 'rotate(0deg)'
      : 'rotate(180deg) translateX(50%) translateY(2%)'};
`

const PanelContent = styled.div`
  color: #000000;
  overflow: hidden;
  width: 1363px;
  background: #f7f7f7;
  border-radius: 10px;
  margin-top: -10px;
  height: ${(props) => (props.isCollapsed ? 0 : '223px')};
`

const PanelContentInner = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 142.6%;
  color: #ff6060;
  padding-top: 35px;
  padding-left: 20px;
  width: 1333px;
`

const ArrowTop = styled.div`
  background-image: url(${arrowtop});
  height: 14.06px;
  width: 23.86px;
  background-repeat: no-repeat;
  padding-right: 33.14px;
  margin-top: 16.08px;
`

const Sécurité = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(true)

  const togglePanel = () => {
    setIsCollapsed((prevState) => !prevState)
  }

  return (
    <Panel>
      <PanelHeading onClick={togglePanel}>
        <p>Sécurité</p>
        <ToggleButtonWrapper isCollapsed={isCollapsed}>
          <ArrowTop />
        </ToggleButtonWrapper>
      </PanelHeading>
      <PanelContent isCollapsed={isCollapsed}>
        <PanelContentInner>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </PanelContentInner>
      </PanelContent>
    </Panel>
  )
}

export default Sécurité
