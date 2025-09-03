import styles from "./MobileNavbar.module.css";
import { searchIcon, threeDotsIcon } from "../../assets";
import { Logo, IconButton, NavigationItem, NavbarContainer } from "../shared";
import { useNavigation } from "../../hooks/useNavigation";
import { NAVIGATION_ITEMS } from "../../constants/constants";

export default function MobileNavbar() {
	const { isActive, handleNavigation } = useNavigation("home");

	return (
		<header>
			<NavbarContainer variant="mobile" className={styles.mobileNavbar}>
				<Logo className={styles.mobileNavbarLogo} />
				<div className={styles.mobileNavbarRight}>
					<IconButton icon={searchIcon} alt="search icon" ariaLabel="Search" className={styles.mobileNavbarSearchIcon} />
					<IconButton icon={threeDotsIcon} alt="Three dots" ariaLabel="Three dots" className={styles.mobileNavbarThreeDots} />
				</div>
			</NavbarContainer>

			{/* Mobile Navigation Bar */}
			<nav className={styles.mobileNav}>
				{NAVIGATION_ITEMS.map((item) => (
					<NavigationItem
						key={item.id}
						icon={item.icon}
						label={item.label}
						href={item.href}
						isActive={isActive(item.id)}
						onClick={() => handleNavigation(item.id)}
						className={styles.mobileNavItem}
					/>
				))}
			</nav>
		</header>
	);
}
