import "./DesktopNavbar.css";
import menuIcon from "../../assets/icons/menu-icon.svg";
import searchIcon from "../../assets/icons/search-icon.svg";
import videoCameraIcon from "../../assets/icons/video-camera-icon.svg";
import sixDotsIcon from "../../assets/icons/six-dots-icon.svg";
import bellIcon from "../../assets/icons/bell-icon.svg";
import logo from "../../assets/images/youtube-logo.png";
import avatarImg from "../../assets/images/user-avatar.png";

export default function DesktopNavbar() {
	return (
		<section className="desktop-navbar">
			<div className="desktop-navbar__left">
				<button className="desktop-navbar__menu-btn" aria-label="Open menu">
					<img src={menuIcon} alt="menu bar icon" />
				</button>
				<a href="/home.html" aria-label="YouTube Home">
					<img className="desktop-navbar__logo" src={logo} alt="YouTube Logo" />
				</a>
				<form className="desktop-navbar__search-form">
					<input className="desktop-navbar__search-input" type="search" placeholder="Search" />
					<button className="desktop-navbar__search-btn" type="submit">
						<img src={searchIcon} alt="search icon" />
					</button>
				</form>
			</div>
			<div className="desktop-navbar__right">
				<button aria-label="Upload video">
					<img className="desktop-navbar__icon" src={videoCameraIcon} alt="upload video" />
				</button>
				<button aria-label="YouTube apps">
					<img className="desktop-navbar__icon" src={sixDotsIcon} alt="apps" />
				</button>
				<button aria-label="Notifications" className="desktop-navbar__notifications-btn">
					<img className="desktop-navbar__icon" src={bellIcon} alt="notifications" />
					<span className="desktop-navbar__notification-count">3</span>
				</button>
				<button aria-label="User profile">
					<img className="desktop-navbar__avatar" src={avatarImg} alt="Your profile picture" />
				</button>
			</div>
		</section>
	);
}
