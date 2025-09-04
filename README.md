# YouTube Clone React

A modern YouTube clone built with React 19, featuring responsive design, component-based architecture, and CSS modules for styling.

## 🚀 Project Overview

This project is a YouTube clone that replicates the core functionality and design of YouTube's interface. It includes a responsive navigation bar, video player, video recommendations, and a clean, modern UI that works seamlessly across desktop and mobile devices.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Components Overview](#components-overview)
- [Pages](#pages)
- [Styling](#styling)
- [Assets](#assets)
- [Installation & Setup](#installation--setup)
- [Development](#development)
- [Build](#build)

## ✨ Features

- **Responsive Design**: Optimized for both desktop and mobile devices
- **Component-Based Architecture**: Modular, reusable components
- **CSS Modules**: Scoped styling with CSS modules
- **Modern React**: Built with React 19 and modern hooks
- **Video Player Interface**: Complete video player with controls
- **Navigation System**: Responsive navigation with active states
- **Video Recommendations**: Sidebar with recommended videos
- **Search Functionality**: Search form with proper accessibility
- **Notification System**: Notification button with count display

## 🛠 Tech Stack

- **React**: ^19.1.1
- **React DOM**: ^19.1.1
- **Vite**: ^7.1.2 (Build tool)
- **ESLint**: ^9.33.0 (Code linting)
- **CSS Modules**: For component-scoped styling

## 📁 Project Structure

```
youtube-clone-react/
├── dist/                          # Build output (generated)
│   ├── assets/                   # Optimized assets
│   └── index.html               # Production HTML
├── src/
│   ├── components/                # React components
│   │   ├── Navbar/               # Navigation components
│   │   │   ├── DesktopNavbar.jsx
│   │   │   ├── DesktopNavbar.module.css
│   │   │   ├── MobileNavbar.jsx
│   │   │   ├── MobileNavbar.module.css
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   ├── shared/               # Reusable shared components
│   │   │   ├── IconButton/
│   │   │   │   ├── IconButton.jsx
│   │   │   │   └── IconButton.module.css
│   │   │   ├── Logo/
│   │   │   │   ├── Logo.jsx
│   │   │   │   └── Logo.module.css
│   │   │   ├── NavigationItem/
│   │   │   │   ├── NavigationItem.jsx
│   │   │   │   └── NavigationItem.module.css
│   │   │   ├── NavbarContainer/
│   │   │   │   ├── NavbarContainer.jsx
│   │   │   │   └── NavbarContainer.module.css
│   │   │   ├── NavbarActions/
│   │   │   │   ├── NavbarActions.jsx
│   │   │   │   └── NavbarActions.module.css
│   │   │   └── index.js          # Shared components exports
│   │   ├── VideoCard/            # Video card component
│   │   │   ├── VideoCard.jsx
│   │   │   └── VideoCard.module.css
│   │   ├── VideoPlayer/          # Video player component
│   │   │   ├── VideoPlayer.jsx
│   │   │   └── VideoPlayer.module.css
│   │   └── VideoDescription/     # Video description component
│   │       ├── VideoDescription.jsx
│   │       └── VideoDescription.module.css
│   ├── pages/                    # Page components
│   │   └── VideoPage/           # Main video page
│   │       ├── VideoPage.jsx
│   │       └── VideoPage.module.css
│   ├── hooks/                    # Custom React hooks
│   │   └── useNavigation.js     # Navigation state management
│   ├── constants/                # Application constants
│   │   └── constants.js         # Navigation and video data
│   ├── assets/                   # Static assets
│   │   ├── icons/               # SVG icons (25+ icons)
│   │   ├── images/              # Images and thumbnails
│   │   └── index.js             # Centralized asset exports
│   ├── styles/                   # Global styles
│   │   └── index.css            # Global CSS and CSS variables
│   ├── App.jsx                   # Main app component
│   └── main.jsx                  # Application entry point
├── package.json                  # Dependencies and scripts
├── package-lock.json            # Dependency lock file
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
├── index.html                   # Development HTML template
└── README.md                    # Project documentation
```

## 🧩 Components Overview

### Main Components

#### 1. **Navbar** (`src/components/Navbar/`)

- **DesktopNavbar.jsx**: Desktop navigation with search and actions
- **MobileNavbar.jsx**: Mobile navigation with bottom nav bar
- **Navbar.jsx**: Main navbar wrapper component

#### 2. **Shared Components** (`src/components/shared/`)

| Component           | Props                                                                                          | Description                                                               |
| ------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Logo**            | `className`, `href`, `alt`                                                                     | YouTube logo component                                                    |
| **IconButton**      | `icon`, `alt`, `ariaLabel`, `onClick`, `className`, `iconClassName`, `children`                | Reusable icon button                                                      |
| **NavigationItem**  | `icon`, `label`, `href`, `isActive`, `onClick`, `className`, `iconClassName`, `labelClassName` | Navigation menu item                                                      |
| **NavbarContainer** | `children`, `className`, `variant`                                                             | Container wrapper for navbar sections                                     |
| **NavbarActions**   | `actions`, `className`, `iconClassName`, `showUserProfile`, `userProfileClassName`             | Renders multiple action buttons with inline notification and user profile |

#### 3. **Video Components**

| Component            | Props                                                           | Description                        |
| -------------------- | --------------------------------------------------------------- | ---------------------------------- |
| **VideoCard**        | `thumbnail`, `title`, `views`, `channel`, `duration`, `onClick` | Video recommendation card          |
| **VideoPlayer**      | None (static)                                                   | Video player with controls overlay |
| **VideoDescription** | None (static)                                                   | Video description and channel info |

### Component Props Flow

```
App.jsx
├── Navbar
│   ├── DesktopNavbar
│   │   ├── Logo (className)
│   │   ├── IconButton (icon, alt, ariaLabel, className)
│   │   ├── Search Form (inline form with input and search button)
│   │   └── NavbarActions (actions, className, iconClassName, showUserProfile, userProfileClassName)
│   └── MobileNavbar
│       ├── Logo (className)
│       ├── IconButton (icon, alt, ariaLabel, className)
│       └── NavigationItem (icon, label, href, isActive, onClick, className)
└── VideoPage
    ├── VideoPlayer
    ├── VideoDescription
    └── VideoCard (thumbnail, title, views, channel, duration, onClick)
```

## 📄 Pages

### VideoPage (`src/pages/VideoPage/VideoPage.jsx`)

- **Purpose**: Main video viewing page
- **Features**:
  - Video player with controls
  - Video description and channel information
  - Sidebar with recommended videos
  - Autoplay toggle functionality
- **Props**: None (uses constants for data)

## 🪝 Custom Hooks

### useNavigation (`src/hooks/useNavigation.js`)

A custom React hook for managing navigation state:

**Features:**

- Active item state management
- Navigation handler with callback support
- Active state checker utility
- Optimized with `useCallback` for performance

**API:**

```javascript
const { activeItem, handleNavigation, isActive } = useNavigation(initialActiveItem);

// Usage
handleNavigation("home"); // Set active item
const isHomeActive = isActive("home"); // Check if item is active
```

**Benefits:**

- Centralized navigation logic
- Reusable across components
- Performance optimized
- Easy to extend with additional features

## 🎨 Styling

The project uses **CSS Modules** for component-scoped styling:

- **Global Styles**: `src/styles/index.css`
- **Component Styles**: Each component has its own `.module.css` file
- **Responsive Design**: Mobile-first approach with media queries
- **CSS Variables**: Used for consistent theming

### Style Files Structure

```
src/
├── styles/
│   └── index.css                    # Global styles
└── components/
    ├── Navbar/
    │   ├── Navbar.module.css
    │   ├── DesktopNavbar.module.css
    │   └── MobileNavbar.module.css
    ├── shared/
    │   ├── IconButton.module.css
    │   ├── Logo.module.css
    │   ├── NavigationItem.module.css
    │   ├── NavbarContainer.module.css
    │   └── NavbarActions.module.css
    ├── VideoCard.module.css
    ├── VideoPlayer.module.css
    └── VideoDescription.module.css
```

## 🖼 Assets

### Icons (`src/assets/icons/`)

The project includes 25+ SVG icons organized by functionality:

**Navigation Icons:**

- `home-icon.svg` - Home navigation
- `trending-icon.svg` - Trending section
- `subscriptions-icon.svg` - Subscriptions
- `library-icon.svg` - Library section

**UI Icons:**

- `search-icon.svg` - Search functionality
- `menu-icon.svg` - Menu toggle
- `bell-icon.svg` - Notifications
- `settings-i.svg` - Settings
- `three-dots-icon.svg` - More options
- `six-dots-icon.svg` - Apps menu

**Video Player Icons:**

- `pause-i.svg` - Play/pause control
- `next-i.svg` - Next video
- `volume-i.svg` - Desktop volume control
- `volume.svg` - Mobile volume control
- `full-screen-i.svg` - Fullscreen toggle
- `size-i.svg` - Player size
- `subtitles-i.svg` - Closed captions

**Action Icons:**

- `like-icon.svg` - Like button
- `dislike-icon.svg` - Dislike button
- `share-icon.svg` - Share functionality
- `more-icon.svg` - More actions
- `video-camera-icon.svg` - Upload video

### Images (`src/assets/images/`)

**Branding:**

- `youtube-logo.png` - YouTube logo

**User Interface:**

- `user-avatar.png` - User profile avatar
- `channel-avatar.png` - Channel avatar

**Video Content:**

- `video-cover-main.png` - Main video thumbnail
- `video-thumbnail-1.png` - Recommended video 1
- `video-thumbnail-2.png` - Recommended video 2
- `video-thumbnail-3.png` - Recommended video 3
- `video-thumbnail-4.png` - Recommended video 4

### Asset Management

**Centralized Exports:**

- All assets are exported from `src/assets/index.js`
- Organized by category with clear naming conventions
- Easy to import: `import { logo, homeIcon } from "../assets"`
- TypeScript-friendly with consistent naming

**Usage Pattern:**

```javascript
// Import assets
import { logo, homeIcon, videoThumbnail1 } from "../assets";

// Use in components
<img src={logo} alt="YouTube" />
<IconButton icon={homeIcon} alt="Home" />
```

## 🔧 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd youtube-clone-react
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🚀 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Development Features

- **Hot Module Replacement (HMR)**: Instant updates during development
- **ESLint Integration**: Code quality and consistency with React-specific rules
- **Vite Build Tool**: Fast development server and optimized production builds
- **React 19**: Latest React features with StrictMode enabled
- **CSS Modules**: Scoped styling with automatic class name generation
- **Modern JavaScript**: ES6+ features with module support
- **Asset Optimization**: Automatic image and icon optimization in builds

## 📦 Build

The project builds to the `dist/` directory with optimized assets:

- **JavaScript**: Bundled and minified
- **CSS**: Processed and optimized
- **Assets**: Optimized images and icons
- **HTML**: Production-ready index.html

## 🎯 Key Features Implementation

### Responsive Navigation

- Desktop navbar with search and user actions
- Mobile navbar with bottom navigation
- Active state management using custom hook

### Video Player

- Custom video player interface
- Desktop and mobile control layouts
- Progress bar and time display
- Action buttons (like, dislike, share)

### Component Architecture

- Reusable shared components (only when used in multiple places)
- Props-based configuration
- CSS modules for styling
- Custom hooks for state management
- Inline components for single-use functionality (SearchForm, NotificationButton, UserProfile)

### Data Management

**Constants Structure (`src/constants/constants.js`):**

- `NAVIGATION_ITEMS` - Array of navigation menu items with icons and labels
- `DESKTOP_NAVBAR_ACTIONS` - Array of desktop navbar action buttons
- `RECOMMENDED_VIDEOS` - Array of video recommendation data

**Data Structure:**

```javascript
// Navigation items with icons, labels, and href
export const NAVIGATION_ITEMS = [
	{ id: "home", icon: homeIcon, label: "Home", href: "#home" },
	// ... more items
];

// Desktop navbar actions with notification support
export const DESKTOP_NAVBAR_ACTIONS = [
	{ id: "notifications", icon: bellIcon, hasNotification: true, count: 3 },
	// ... more actions
];

// Video recommendations with thumbnails and metadata
export const RECOMMENDED_VIDEOS = [
	{ id: 1, thumbnail: videoThumbnail1, title: "Video Title", views: "123k views", channel: "Channel Name", duration: "8:00" },
	// ... more videos
];
```

**Features:**

- Centralized asset management through `src/assets/index.js`
- Easy to extend and modify data structures
- Consistent naming conventions
- TypeScript-friendly structure

## 🔮 Future Enhancements

- Video playback functionality
- User authentication
- Comments system
- Playlist management
- Search functionality
- Video upload
- User subscriptions
- Dark mode theme

---

**Built with ❤️ using React 19 and modern web technologies**

---
[youtube-clone-react](https://youtube-clone-react-ashen.vercel.app/)
