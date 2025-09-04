import { IconButton } from "../index";
import { avatarImg } from "../../../assets";
import styles from "./NavbarActions.module.css";

const NavbarActions = ({ actions = [], className = "", iconClassName = "", showUserProfile = false, userProfileClassName = "", ...props }) => {
	return (
		<div className={className} {...props}>
			{actions.map((action) => {
				if (action.hasNotification) {
					return (
						<IconButton
							key={action.id}
							icon={action.icon}
							alt={action.alt}
							ariaLabel={action.ariaLabel}
							className={`${styles.notificationButton} ${action.className}`}
							iconClassName={iconClassName}
						>
							{action.count > 0 && <span className={styles.notificationCount}>{action.count}</span>}
						</IconButton>
					);
				}

				return (
					<IconButton
						key={action.id}
						icon={action.icon}
						alt={action.alt}
						ariaLabel={action.ariaLabel}
						className={action.className}
						iconClassName={iconClassName}
					/>
				);
			})}
			{showUserProfile && (
				<div className={`${styles.userProfile} ${userProfileClassName}`}>
					<img src={avatarImg} alt="User profile" className={styles.userProfileImage} />
				</div>
			)}
		</div>
	);
};

export default NavbarActions;
