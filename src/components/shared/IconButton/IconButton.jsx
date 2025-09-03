import styles from "./IconButton.module.css";

const IconButton = ({ icon, alt, ariaLabel, onClick, className = "", iconClassName = "", children, ...props }) => {
	return (
		<button className={`${styles.iconButton} ${className}`} aria-label={ariaLabel} onClick={onClick} {...props}>
			{icon && <img src={icon} alt={alt} className={`${styles.icon} ${iconClassName}`} />}
			{children}
		</button>
	);
};

export default IconButton;
