import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"

// Exporte la fonction Home qui renvoie un élément avec 2 composants Header et Footer
// classe 'home' qui applique le css sur les 2 composants
export default function Home() {
	return (
		<div className='home'>
			<Header />
			<Footer />
		</div>
	)
}