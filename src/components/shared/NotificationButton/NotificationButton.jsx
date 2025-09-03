import styles from "./NotificationButton.module.css";
import { IconButton } from "../index";

const NotificationButton = ({ icon, alt = "notifications", ariaLabel = "Notifications", count = 0, onClick, className = "", iconClassName = "", ...props }) => {
	return (
		<IconButton
			icon={icon}
			alt={alt}
			ariaLabel={ariaLabel}
			onClick={onClick}
			className={`${styles.notificationButton} ${className}`}
			iconClassName={iconClassName}
			{...props}
		>
			{count > 0 && <span className={styles.notificationCount}>{count}</span>}
		</IconButton>
	);
};

export default NotificationButton;
