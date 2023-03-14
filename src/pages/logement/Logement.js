import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import datas from '../../data/data'
import Header from "../../components/header/Header"
import Slider from "../../components/carousel/Carousel"



export default function Logement() {
	
	const [imageSlider, setImageSlider] = useState([]);

	const idLogement = useParams('id').id;
	
	useEffect(() => {
		const dataCurrentLogement = datas.filter(data => data.id === idLogement);
		setImageSlider(dataCurrentLogement[0].pictures);
	}, [idLogement]);

	return (
		<>
			<Header/>
			<Slider imageSlider={imageSlider}/>
          </>
     )
}