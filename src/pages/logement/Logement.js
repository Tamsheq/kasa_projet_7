import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import datas from '../../data/data'
import Header from "../../components/header/Header"
import Slider from "../../components/carousel/Carousel"
import Footer from '../../components/footer/Footer'


export default function Logement() {
	// on définit l'état initial de imageSlider avec le hook useState qui sera un tableau vide
	const [imageSlider, setImageSlider] = useState([]);

     // on utilise le hook useParams pour récupérer l'id du logement et renvoyer un objet contenant les paramètres d'URL pour la route
	const idLogement = useParams('id').id;
	
     // useEffect qui sera utilisée pour exécuter l'action lorsqu'un changement est détecté dans l'id du logement
	useEffect(() => {
		const dataCurrentLogement = datas.filter(data => data.id === idLogement);
		setImageSlider(dataCurrentLogement[0].pictures);
	}, [idLogement]);

     // on return en front les composants Header et Slider avec imageSlider afin d'afficher le carousel d'images
	return (
		<>
			<Header/>
			<Slider imageSlider={imageSlider}/>
               <Footer />
          </>
     )
}