import Header from "../../components/header/Header"
import Footer from '../../components/footer/Footer'
import './error.scss'
import { Link } from 'react-router-dom'

export default function Error() {
     // contenu de la fonction 
	return (
		<div className='Error'>
			<Header />
			<div className="Error_infos">
				<h1 className='Error_infos_title'>404</h1>
				<p className='Error_infos_content'>La page que vous recherchez n'existe pas.</p>
			</div>
				<Link className='Error_infos_return' to='/'>Retourner sur la page d'accueil</Link>
			<Footer />
		</div>
	)
}