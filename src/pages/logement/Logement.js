import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import datas from '../../data/data'
import Header from "../../components/header/Header"
import Slider from "../../components/carousel/Carousel"
import Footer from '../../components/footer/Footer'


export default function Logement() {

	// Ajout du hook useNavigate qui permettra de vérifier plus tard l'existence de l'ID
	const navigate = useNavigate();

	// on définit l'état initial de imageSlider avec le hook useState qui sera un tableau vide
	const [imageSlider, setImageSlider] = useState([]);

     // on utilise le hook useParams pour récupérer l'id du logement et renvoyer un objet contenant les paramètres d'URL pour la route
	const idLogement = useParams('id').id;
	
     // useEffect qui sera utilisée pour exécuter l'action lorsqu'un changement est détecté dans l'id du logement
	// si logement introuvable on renvoie aucun élement et appelle la méthode 'navigate'
	useEffect(() => {
		const dataCurrentLogement = datas.filter(data => data.id === idLogement);
		if (dataCurrentLogement.length === 0) {
			navigate('/error', { replace: true });
		   } else {
			setImageSlider(dataCurrentLogement[0].pictures);
		   }
		 }, [idLogement, navigate]);

     // on return en front les composants Header et Slider avec imageSlider afin d'afficher le carousel d'images
	return (
		<>
			<Header/>
			<Slider imageSlider={imageSlider}/>
               <Footer />
          </>
     )
}