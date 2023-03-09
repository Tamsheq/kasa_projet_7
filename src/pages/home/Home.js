import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Banner from "../../components/banner/Banner"
import List from "../../components/list/List"
import './Home.scss'

// Exporte la fonction Home qui renvoie un élément avec 4 composants Header, Footer, Banner et List
// classe 'home' qui applique le css
export default function Home() {
	return (
		<div className='home'>
			<Header />
			<Banner />
			<List />
			<Footer />
		</div>
	)
}