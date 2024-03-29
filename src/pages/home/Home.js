import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Banner from "../../components/banner/Banner"
import List from "../../components/list/List"
import HomeScreenImage from "../../assets/home_screen.png"
import './Home.scss'

// Exporte la fonction Home qui renvoie un élément avec 4 composants Header, Footer, Banner et List
// classe 'home' qui applique le css
export default function Home() {
	return (
		<div className='home'>
			<Header />
			<Banner image={HomeScreenImage} desc={"Chez vous, partout et ailleurs"}/>
			<List />
			<Footer />
		</div>
	)
}