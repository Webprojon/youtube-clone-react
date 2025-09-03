import styles from "./VideoDescription.module.css";
import { channelAvatar } from "../../assets";

export default function VideoDescription() {
	return (
		<div className={styles.videoDescription}>
			{/* Channel Information */}
			<div className={styles.videoDescriptionChannelInfo}>
				<div className={styles.videoDescriptionChannelAvatar}>
					<img src={channelAvatar} alt="Channel avatar" />
				</div>
				<div className={styles.videoDescriptionChannelDetails}>
					<h2 className={styles.videoDescriptionChannelName}>Food & Drink</h2>
					<p className={styles.videoDescriptionPublishDate}>Published on 14 Jun 2019</p>
					<p className={styles.videoDescriptionMobilePublishDate}>245K subscribed</p>
				</div>
				<button className={styles.videoDescriptionSubscribeBtn}>Subscribe 2.3m</button>
				<button className={styles.videoDescriptionMobileSubscribeBtn}>Subscribe</button>
			</div>

			{/* Video Description */}
			<div className={styles.videoDescriptionContent}>
				<p className={styles.videoDescriptionText}>
					A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal
					to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including
					ad placement, demographic, even the consumer's mood when they see your ad.
				</p>
				<button className={styles.videoDescriptionShowMore}>Show more</button>
			</div>
		</div>
	);
}
