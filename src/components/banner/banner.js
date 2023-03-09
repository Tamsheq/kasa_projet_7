import './banner.scss'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Banner() {
	// aboutPage qui permet de savoir si la page est About (=true) ou non (=false)
	// useLocation pour récupérer le chemin de l'URL
	const [aboutPage, setAboutPage] = useState(false);
	const location = useLocation();

	// 
	useEffect(() => {
		if(location.pathname === '/about'){
			setAboutPage(true)
		};
		// eslint-disable-next-line
	}, [])

	return (
		<section className={aboutPage ? 'banner_about' : 'banner'}>
			{!aboutPage && <p>Chez vous, partout et ailleurs</p>}
		</section>
	)
}