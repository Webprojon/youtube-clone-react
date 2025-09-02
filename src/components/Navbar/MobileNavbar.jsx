import "./MobileNavbar.css";
import searchIcon from "../../assets/icons/search-icon.svg";
import threeDotsIcon from "../../assets/icons/three-dots-icon.svg";
import logo from "../../assets/images/youtube-logo.png";

export default function MobileNavbar() {
	return (
		<section className="mobile-navbar">
			<a href="/home.html" aria-label="YouTube Home">
				<img className="mobile-navbar__logo" src={logo} alt="YouTube Logo" />
			</a>
			<div className="mobile-navbar__right">
				<button aria-label="Search">
					<img src={searchIcon} alt="search icon" />
				</button>
				<button aria-label="Three dots">
					<img className="mobile-navbar__three-dots" src={threeDotsIcon} alt="Three dots" />
				</button>
			</div>
		</section>
	);
}
