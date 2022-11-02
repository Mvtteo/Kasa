import React from 'react'
import styled from 'styled-components'
import './arrows/arrowtop.png'
import './arrows/arrowtop-mini.png'

let arrowtop = require('./arrows/arrowtop.png')
let arrowtopmini = require('./arrows/arrowtop-mini.png')

const Panel = styled.div`
  width: auto;
  min-height: 47px;
  margin-left: 208px;
  margin-right: 209px;
  margin-bottom: ${(props) => (props.isCollapsed ? '20px' : '23px')};
  @media only screen and (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    margin-left: 40px;
    margin-right: 40px;
  }
  @media only screen and (max-width: 1024px) {
    min-height: 30px;
  }
`

const PanelHeading = styled.div`
  background-color: #ff6060;
  border-radius: 10px;
  height: 47px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  position: relative;
  @media only screen and (max-width: 1024px) {
    height: 30px;
    border-radius: 5px;
  }
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
  width: auto;
  background: #f7f7f7;
  border-radius: 10px;
  margin-top: -10px;
  height: ${(props) => (props.isCollapsed ? 0 : 'auto')};
  @media only screen and (max-width: 1024px) {
    height: ${(props) => (props.isCollapsed ? 0 : 'auto')};
    border-radius: 5px;
  }
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
  width: 97%;
  @media only screen and (max-width: 1024px) {
    font-size: 12px;
    padding-top: 17.5px;
    padding-left: 12px;
    padding-bottom: 12px;
  }
`

const ArrowTop = styled.div`
  background-image: url(${arrowtop});
  height: 14.06px;
  width: 23.86px;
  background-repeat: no-repeat;
  padding-right: 33.14px;
  margin-top: 16.08px;
  @media only screen and (max-width: 1024px) {
    background-image: url(${arrowtopmini});
    height: 15.2px;
    width: 8.98px;
    margin-top: 30%;
    padding-right: 20px;
  }
`

const Service = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(true)

  const togglePanel = () => {
    setIsCollapsed((prevState) => !prevState)
  }

  return (
    <Panel>
      <PanelHeading onClick={togglePanel}>
        <p>Service</p>
        <ToggleButtonWrapper isCollapsed={isCollapsed}>
          <ArrowTop />
        </ToggleButtonWrapper>
      </PanelHeading>
      <PanelContent isCollapsed={isCollapsed}>
        <PanelContentInner>
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </PanelContentInner>
      </PanelContent>
    </Panel>
  )
}

export default Service
