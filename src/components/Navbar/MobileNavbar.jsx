import "./MobileNavbar.css";

import { searchIcon, threeDotsIcon, homeIcon, trendingIcon, subscriptionsIcon, libraryIcon, logo } from "../../assets";

export default function MobileNavbar() {
	return (
		<header>
			<section className="mobile-navbar">
				<a href="/home.html" aria-label="YouTube Home">
					<img className="mobile-navbar__logo" src={logo} alt="YouTube Logo" />
				</a>
				<div className="mobile-navbar__right">
					<button aria-label="Search">
						<img className="mobile-navbar__search-icon" src={searchIcon} alt="search icon" />
					</button>
					<button aria-label="Three dots">
						<img className="mobile-navbar__three-dots" src={threeDotsIcon} alt="Three dots" />
					</button>
				</div>
			</section>

			{/* Mobile Navigation Bar */}
			<nav className="mobile-nav">
				<a className="mobile-nav__item mobile-nav__item--active" href="#home">
					<img src={homeIcon} alt="home" />
					Home
				</a>
				<a className="mobile-nav__item" href="#trending">
					<img src={trendingIcon} alt="trending" />
					Trending
				</a>
				<a className="mobile-nav__item" href="#subscriptions">
					<img src={subscriptionsIcon} alt="subscriptions" />
					Subscriptions
				</a>
				<a className="mobile-nav__item" href="#library">
					<img src={libraryIcon} alt="library" />
					Library
				</a>
			</nav>
		</header>
	);
}
