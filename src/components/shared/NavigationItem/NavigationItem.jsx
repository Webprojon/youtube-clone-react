import styles from "./NavigationItem.module.css";

const NavigationItem = ({ icon, label, href, isActive = false, onClick, className = "", iconClassName = "", labelClassName = "", ...props }) => {
	const Component = href ? "a" : "button";

	return (
		<Component className={`${styles.navigationItem} ${isActive ? styles.active : ""} ${className}`} href={href} onClick={onClick} {...props}>
			{icon && <img src={icon} alt={label} className={`${styles.icon} ${iconClassName}`} />}
			{label && <span className={`${styles.label} ${labelClassName}`}>{label}</span>}
		</Component>
	);
};

export default NavigationItem;
