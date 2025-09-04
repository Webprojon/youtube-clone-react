import { useState, useCallback } from "react";

export const useNavigation = (initialActiveItem = "home") => {
	const [activeItem, setActiveItem] = useState(initialActiveItem);

	const handleNavigation = useCallback((itemId) => {
		setActiveItem(itemId);
		// You can add additional logic here like analytics tracking, etc.
	}, []);

	const isActive = useCallback(
		(itemId) => {
			return activeItem === itemId;
		},
		[activeItem],
	);

	return {
		activeItem,
		handleNavigation,
		isActive,
	};
};
