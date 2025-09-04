import styles from "./VideoCard.module.css";

const VideoCard = ({ thumbnail, title, views, channel, duration, onClick }) => {
	return (
		<div className={styles.videoCard} onClick={onClick}>
			<div className={styles.videoThumbnailContainer}>
				<img src={thumbnail} alt={title} className={styles.videoThumbnail} />
				<div className={styles.videoDuration}>{duration}</div>
			</div>

			<div className={styles.videoInfo}>
				<h3 className={styles.videoTitle}>{title}</h3>
				<div className={styles.videoMeta}>
					<span className={styles.videoViews}>{views}</span>
					<span className={styles.videoChannel}>{channel}</span>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
