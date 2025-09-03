import "./VideoDescription.css";
import channelAvatar from "../../assets/images/channel-avatar.png";

export default function VideoDescription() {
	return (
		<div className="video-description">
			{/* Channel Information */}
			<div className="video-description__channel-info">
				<div className="video-description__channel-avatar">
					<img src={channelAvatar} alt="Channel avatar" />
				</div>
				<div className="video-description__channel-details">
					<h2 className="video-description__channel-name">Food & Drink</h2>
					<p className="video-description__publish-date">Published on 14 Jun 2019</p>
					<p className="video-description__mobile-publish-date">245K subscribed</p>
				</div>
				<button className="video-description__subscribe-btn">Subscribe 2.3m</button>
				<button className="video-description__mobile-subscribe-btn">Subscribe</button>
			</div>

			{/* Video Description */}
			<div className="video-description__content">
				<p className="video-description__text">
					A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal
					to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including
					ad placement, demographic, even the consumer's mood when they see your ad.
				</p>
				<button className="video-description__show-more">Show more</button>
			</div>
		</div>
	);
}
