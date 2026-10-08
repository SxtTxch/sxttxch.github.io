import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Content from './components/Content.jsx';
import '../responsive.css';
export default function App() {
	return (
		<>
		     <div id="App">
			<Header />
			<Content />
			<Footer />
		     </div>
		</>
	);
}
