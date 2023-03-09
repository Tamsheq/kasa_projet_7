import arrow from '../../assets/arrow.png'
import './collapse.scss'
import { useState } from 'react'

// Composant Collapse qui contient title et content
export default function Collapse({title, content}) {
     
     // Qui peuvent être masqués ou affichés en fonction du clic
     // useState pour déclarer une variable d'état afin de déterminer si affichage du contenu ou non
     const [toggle, setToggle] = useState(false);

     // on permet l'affichage dans la balise <div> et onClick met à jour l'état de toggle
     return (
         <>
               <div className="collapse" >
                    <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                         {title}
                         <img 
                              className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                              src={arrow} 
                              alt="show content" 
                         />
                    </h3>
                    <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                         {Array.isArray(content) ? content.map((item, index) => {
                              return (
                              <p key={index}>{item}</p>
                              )
                         }) : content
                         }
                    </div> 
               </div>
         </>
     )
}