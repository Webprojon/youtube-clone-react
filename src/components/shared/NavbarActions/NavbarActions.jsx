import { IconButton, NotificationButton } from "../index";

const NavbarActions = ({ actions = [], className = "", iconClassName = "", ...props }) => {
	return (
		<div className={className} {...props}>
			{actions.map((action) => {
				if (action.hasNotification) {
					return (
						<NotificationButton
							key={action.id}
							icon={action.icon}
							alt={action.alt}
							ariaLabel={action.ariaLabel}
							count={action.count || 0}
							className={action.className}
							iconClassName={iconClassName}
						/>
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
		</div>
	);
};

export default NavbarActions;
