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

	// Utilisation du hook useNavigate pour la gestion de la navigation
	const navigate = useNavigate();

	// Utilisation de useState pour stocker les images du slider
	const [imageSlider, setImageSlider] = useState([]);

	// Utilisation du hook useParams pour atteindre l'ID du logement séléctionner dans l'URL
	const { id } = useParams();

	// Triage les données pour récupérer le logement qui correspond à l'ID
	const dataCurrentLogement = datas.find(data => data.id === id);
  
	useEffect(() => {
		// SI logement non trouver, rediriger vers la page d'erreur
		if (!dataCurrentLogement) {
			navigate('/error', { replace: true });
		// SINON, le state est mis à jour avec les images du slider
		} else {
			setImageSlider(dataCurrentLogement.pictures);
		}
	}, [dataCurrentLogement, navigate]);

	const name = dataCurrentLogement?.host?.name?.split(' ') ?? [];
	const rating = dataCurrentLogement?.rating ?? 0;
	const description = dataCurrentLogement?.description ?? "";
	const equipments = dataCurrentLogement?.equipments ?? [];

	// Et on return en front les composants suivants :
	// Header, Slider, les données correspondant à l'ID et le footer
	return (
	<>
		<Header />
		<Slider imageSlider={imageSlider} />
		<main className="Logement">
		<div className="Logement_content">
			<div className="Logement_content_infos">
			<h1>{dataCurrentLogement?.title}</h1>
			<p>{dataCurrentLogement?.location}</p>
			<div>
			{dataCurrentLogement?.tags?.map((tag, index) => {
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
			<img src={dataCurrentLogement?.host?.picture} alt="host of this house" />
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
			<Collapse title={'Équipements'} content={equipments} />
			</div>
		</div>
		</main>
		<Footer />
	</>
	)
	}