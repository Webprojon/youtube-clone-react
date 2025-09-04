import { homeIcon, trendingIcon, subscriptionsIcon, libraryIcon, videoCameraIcon, sixDotsIcon, bellIcon } from "../assets";

import { videoThumbnail1, videoThumbnail2, videoThumbnail3, videoThumbnail4 } from "../assets";

// Navigation constants
export const NAVIGATION_ITEMS = [
	{ id: "home", icon: homeIcon, label: "Home", href: "#home" },
	{ id: "trending", icon: trendingIcon, label: "Trending", href: "#trending" },
	{ id: "subscriptions", icon: subscriptionsIcon, label: "Subscriptions", href: "#subscriptions" },
	{ id: "library", icon: libraryIcon, label: "Library", href: "#library" },
];

export const DESKTOP_NAVBAR_ACTIONS = [
	{ id: "upload", icon: videoCameraIcon, alt: "upload video", ariaLabel: "Upload video" },
	{ id: "apps", icon: sixDotsIcon, alt: "apps", ariaLabel: "YouTube apps" },
	{ id: "notifications", icon: bellIcon, alt: "notifications", ariaLabel: "Notifications", hasNotification: true, count: 3 },
];

// Video data constants
export const RECOMMENDED_VIDEOS = [
	{
		id: 1,
		thumbnail: videoThumbnail1,
		title: "Baby Monitor Technology",
		views: "123k views",
		channel: "Dollie Blair",
		duration: "8:00",
	},
	{
		id: 2,
		thumbnail: videoThumbnail2,
		title: "A Good Autoresponder",
		views: "123k views",
		channel: "Dollie Blair",
		duration: "8:00",
	},
	{
		id: 3,
		thumbnail: videoThumbnail3,
		title: "Selecting The Right Hotel",
		views: "123k views",
		channel: "Dollie Blair",
		duration: "8:00",
	},
	{
		id: 4,
		thumbnail: videoThumbnail4,
		title: "How To Make A Perfect Cup",
		views: "123k views",
		channel: "Dollie Blair",
		duration: "8:00",
	},
];
