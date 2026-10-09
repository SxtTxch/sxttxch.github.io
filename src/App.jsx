import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Content from './components/Content.jsx';
import '../responsive.css';
export default function App({device}) {
    console.log(device);
	return (
		<>
		    <div id="App" class={device}>
			    <Header />
			    <Content />
			    <Footer />
		     </div>
		</>
	);
}
