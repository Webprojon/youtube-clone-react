import styles from "./DesktopNavbar.module.css";
import { menuIcon, searchIcon } from "../../assets";
import { Logo, IconButton, NavbarContainer, NavbarActions } from "../shared";
import { DESKTOP_NAVBAR_ACTIONS } from "../../constants/constants";

export default function DesktopNavbar() {
	const handleSearchSubmit = (e) => {
		e.preventDefault();
		// Handle search logic here
	};

	return (
		<NavbarContainer variant="desktop" className={styles.desktopNavbar}>
			<div className={styles.desktopNavbarLeft}>
				<IconButton icon={menuIcon} alt="menu bar icon" ariaLabel="Open menu" className={styles.desktopNavbarMenuBtn} />
				<Logo className={styles.desktopNavbarLogo} />
				<form className={`${styles.searchForm} ${styles.desktopNavbarSearchForm}`} onSubmit={handleSearchSubmit}>
					<input className={styles.searchInput} type="search" placeholder="Search" />
					<IconButton icon={searchIcon} alt="search icon" ariaLabel="Search" type="submit" iconClassName={styles.searchIcon} />
				</form>
			</div>
			<NavbarActions
				actions={DESKTOP_NAVBAR_ACTIONS}
				className={styles.desktopNavbarRight}
				iconClassName={styles.desktopNavbarIcon}
				showUserProfile={true}
				userProfileClassName={styles.desktopNavbarUserProfile}
			/>
		</NavbarContainer>
	);
}
