import "./Navbar.css";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
	return (
		<header>
			<DesktopNavbar />
			<MobileNavbar />
		</header>
	);
}
