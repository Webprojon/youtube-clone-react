import styles from "./DesktopNavbar.module.css";
import { menuIcon, searchIcon } from "../../assets";
import { Logo, IconButton, SearchForm, NavbarContainer, NavbarActions } from "../shared";
import { DESKTOP_NAVBAR_ACTIONS } from "../../constants/constants";

export default function DesktopNavbar() {
	return (
		<NavbarContainer variant="desktop" className={styles.desktopNavbar}>
			<div className={styles.desktopNavbarLeft}>
				<IconButton icon={menuIcon} alt="menu bar icon" ariaLabel="Open menu" className={styles.desktopNavbarMenuBtn} />
				<Logo className={styles.desktopNavbarLogo} />
				<SearchForm searchIcon={searchIcon} className={styles.desktopNavbarSearchForm} />
			</div>
			<NavbarActions actions={DESKTOP_NAVBAR_ACTIONS} className={styles.desktopNavbarRight} iconClassName={styles.desktopNavbarIcon} />
		</NavbarContainer>
	);
}
