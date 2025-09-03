import styles from "./NavbarContainer.module.css";

const NavbarContainer = ({ children, className = "", variant = "desktop", ...props }) => {
	const containerClass = variant === "mobile" ? styles.mobileNavbar : styles.desktopNavbar;

	return (
		<section className={`${containerClass} ${className}`} {...props}>
			{children}
		</section>
	);
};

export default NavbarContainer;
