import styles from "./VideoPage.module.css";
import { RECOMMENDED_VIDEOS } from "../../constants/constants";
import VideoCard from "../../components/VideoCard/VideoCard";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDescription from "../../components/VideoDescription/VideoDescription";

export default function VideoPage() {
	const handleVideoClick = (videoId) => {
		console.log(`Clicked on video ${videoId}`);
	};

	return (
		/* Main Container */
		<div className={styles.videoPage}>
			<div className={styles.videoPageMain}>
				<VideoPlayer />
				<VideoDescription />
			</div>

			{/* Sidebar Container */}
			<div className={styles.videoPageSidebar}>
				<div className={styles.nextSection}>
					<div className={styles.nextSectionHeader}>
						<h2 className={styles.nextSectionTitle}>Next</h2>
						<div className={styles.nextSectionAutoplay}>
							<span className={styles.autoplayLabel}>AUTOPLAY</span>
							<div className={styles.autoplayToggle}>
								<div className={styles.autoplayToggleSwitch}></div>
							</div>
						</div>
					</div>

					<div className={styles.nextSectionVideos}>
						{RECOMMENDED_VIDEOS.map(({ id, thumbnail, title, views, channel, duration }) => (
							<VideoCard
								key={id}
								thumbnail={thumbnail}
								title={title}
								views={views}
								channel={channel}
								duration={duration}
								onClick={() => handleVideoClick(id)}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
