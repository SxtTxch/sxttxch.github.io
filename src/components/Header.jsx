import Github from "../assets/github.svg";
import Instagram from "../assets/instagram.svg";
import AngryGhost from "../assets/angry-ghost.svg";
import "./Header.css";

export default function Header() {
	return (
	<header>
		<div class="header-part" id="left-header">
			<div id="logo"><img src={AngryGhost}/></div>
			<div id="Author">Kacper Oleksy</div>
		</div>
		<div class="header-part" id="right-header">
			<a href="https://www.instagram.com/kaaxxcper/" className="pointer svg" target="_blank">
				<img src={Instagram}/>
			</a>
			<a href="https://www.github.com/SxtTxch" className="pointer svg" target="_blank">
				<img src={Github}/>
			</a>

		</div>
	</header>
	);
}
