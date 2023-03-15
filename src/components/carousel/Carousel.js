import './carousel.scss'
import Arrow_right from '../../assets/arrow_right.png'
import Arrow_left from '../../assets/arrow_left.png'
import { useState } from 'react'

export default function Slider({imageSlider}) {

     // Le composant utilise le hook useState pour définir l'étal local currentIndex (=index de l'image actuellement affichée)
     const [currentIndex, setCurrentIndex] = useState(0)

     // on définit ici deux fonctions :
     
     // La fonction nextSlide qui va permetttre d'augmenter la valeur de currentIndex
     const nextSlide = () => {
          setCurrentIndex(currentIndex + 1)
          if(currentIndex === imageSlider.length - 1)
               setCurrentIndex(0)
     }

     // la fonction prevSlide qui va permettre de réduire la valeur de currentIndex
     const prevSlide = () => {
          setCurrentIndex(currentIndex - 1)
          if(currentIndex === 0)
               setCurrentIndex(imageSlider.length - 1)
     }

     // Return en front, on utilise la propriété style pour afficher l'image actuelle du slider, la valeur est définie par une template string
     return (
          <section style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className='carousel'>
               {imageSlider.length > 1 &&
                    <>
                         <img
                              className='carousel_arrow carousel_arrow_right'
                              src={Arrow_right}
                              alt ="show next slide"
                              onClick={nextSlide}
                         />
                         <img
                              className='carousel_arrow carousel_arrow_left'
                              src={Arrow_left}
                              alt ="show prev slide"
                              onClick={prevSlide}
                         />
                         <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>
                    </>
               }
          </section>
     )
}