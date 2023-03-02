import './card.scss'
import { Link } from 'react-router-dom'

// Voici nos 3 propriétés (props)
export default function Card({id, title, cover}) {

     // Link qui redirige vers une page de détails du logement (qui sera déterminée par $id)
	return (
		<Link to={`/logement/${id}`} className="list_card">
			<img src={cover} alt={title} />
			<h3>{title}</h3>	
		</Link>
	)
}
