import './logement.scss'
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import datas from '../../data/data'
import Header from "../../components/header/Header"
import Slider from "../../components/carousel/Carousel"
import Collapse from "../../components/collapse/Collapse"
import Footer from '../../components/footer/Footer'
import redStar from '../../assets/red_star.png'
import greyStar from '../../assets/grey_star.png'


export default function Logement() {

	// Ajout du hook useNavigate qui permettra de vérifier plus tard l'existence de l'ID
	const navigate = useNavigate();

	// on définit l'état initial de imageSlider avec le hook useState qui sera un tableau vide
	const [imageSlider, setImageSlider] = useState([]);

     // on utilise le hook useParams pour récupérer l'id du logement et renvoyer un objet contenant les paramètres d'URL
	// et méthode filter pour filtrer datas
	const idLogement = useParams('id').id;
	const dataCurrentLogement = datas.filter(data => data.id === idLogement);
	
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

		 // on utilise dataCurrentLogement pour accèder à l'objet et aux propriétées
		 const name = dataCurrentLogement[0].host.name.split(' '); 
		 const rating = dataCurrentLogement[0].rating;
		 const description  = dataCurrentLogement[0].description;
		 const equipments = dataCurrentLogement[0].equipments;

     // on return en front les composants Header, Footer, Slider avec imageSlider afin d'afficher le carousel d'images
	// et l'élément main contiendra les informations sur le logement
	return (
		<>
			<Header/>
			<Slider imageSlider={imageSlider}/>
				<main className="Logement">
					<div className="Logement_content">
						<div className="Logement_content_infos">
							<h1>{dataCurrentLogement[0].title}</h1>
							<p>{dataCurrentLogement[0].location}</p>
							<div>
								{dataCurrentLogement[0].tags.map((tag, index) => {
									return (
										<button key={index}>{tag}</button>
									)
								})}
							</div>
						</div>
						<div className="Logement_content_host">
							<div>
								<div className='Logement_content_host_name'>
									<span>{name[0]}</span>
									<span>{name[1]}</span>
								</div>
								<img src={dataCurrentLogement[0].host.picture} alt="host of this house" />
							</div>
								
							<div className="Logement_content_host_stars">
								{[...Array(5)].map((star, index) => {
									const ratingValue = index + 1;
									return (
										<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
									)
								})}
							</div>
						</div>
					</div>
					<div className="Logement_collapse">
						<div className="Logement_collapse_item">
							<Collapse title={'Description'} content={description} />	
						</div>
						<div className="Logement_collapse_item">
							<Collapse title={'Équipements'} content={equipments}/>
						</div>	
					</div>
				</main>
               <Footer />
          </>
     )
}