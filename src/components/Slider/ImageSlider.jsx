import { useState } from 'react'

const slideStyles = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

const sliderStyles = {
  position: 'relative',
  height: '100%',
}

//définition du comportement du slider
const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex]})`,
  }

  return (
    <div style={sliderStyles}>
      <div>
        {/* application du comportement des flèches */}
        <div onClick={goToPrevious} className="arrowleft"></div>
        <div onClick={goToNext} className="arrowright"></div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div className="index">
        {/* affichage de l'indicateur de slide actuelle */}
        {currentIndex + 1}/{slides.length}
      </div>
    </div>
  )
}

export default ImageSlider
