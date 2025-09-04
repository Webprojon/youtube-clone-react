import styles from "./Navbar.module.css";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
	return (
		<header className={styles.header}>
			<DesktopNavbar />
			<MobileNavbar />
		</header>
	);
}
