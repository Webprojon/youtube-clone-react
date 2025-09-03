import "./VideoPlayer.css";
import {
	videoCover,
	likeIcon,
	dislikeIcon,
	shareIcon,
	moreIcon,
	pauseIcon,
	nextIcon,
	volumeIcon,
	volumeIcon2,
	ccIcon,
	settingsIcon,
	sizeIcon,
	fullscreenIcon,
} from "../../assets";

export default function VideoPlayer() {
	return (
		<div className="video-player">
			<div className="video-player__container">
				{/* Video Cover */}
				<div className="video-player__cover">
					<img src={videoCover} alt="Video thumbnail" />
				</div>

				{/* Desktop Video Controls Overlay */}
				<div className="video-player__controls">
					{/* Time Display */}
					<div className="video-player__time-display">
						<span>1:34</span>
						<span>19:00</span>
					</div>

					{/* Progress Bar */}
					<div className="video-player__progress-bar">
						<div className="video-player__progress-fill"></div>
					</div>

					{/* Bottom Controls */}
					<div className="video-player__bottom-controls">
						{/* Left Controls */}
						<div className="video-player__left-controls">
							<button className="video-player__pause-btn" aria-label="Pause">
								<img src={pauseIcon} alt="Pause" />
							</button>
							<button className="video-player__next-btn" aria-label="Skip Forward">
								<img src={nextIcon} alt="Next" />
							</button>
							<button className="video-player__volume-btn" aria-label="Volume">
								<img src={volumeIcon} alt="Volume" />
							</button>
						</div>

						{/* Right Controls */}
						<div className="video-player__right-controls">
							<button className="video-player__subtitles-btn" aria-label="Closed Captions">
								<img src={ccIcon} alt="Closed Captions" />
							</button>
							<button className="video-player__settings-btn" aria-label="Settings">
								<img src={settingsIcon} alt="Settings" />
							</button>
							<button className="video-player__size-btn" aria-label="Picture-in-Picture">
								<img src={sizeIcon} alt="Size" />
							</button>
							<button className="video-player__fullscreen-btn" aria-label="Full Screen">
								<img src={fullscreenIcon} alt="Full Screen" />
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Video Controls Overlay */}
				<div className="video-player__mobile-controls">
					<button className="video-player__mobile-btn" aria-label="Pause">
						<img src={pauseIcon} alt="Pause" />
					</button>
					<span>1:34</span>
					<div className="video-player__mobile-progress-bar">
						<div className="video-player__mobile-progress-fill"></div>
					</div>
					<span>-10:00</span>
					<button className="video-player__mobile-btn" aria-label="Volume">
						<img src={volumeIcon2} alt="Volume" />
					</button>
				</div>
			</div>

			{/* Video Info */}
			<section className="video-player__info">
				<div className="video-player__info-title">
					<h1 className="video-player__title">Dude You Re Getting A Telescope</h1>
					<p className="video-player__views">123k views</p>
				</div>

				{/* Action Buttons */}
				<div className="video-actions">
					<button className="video-action-btn">
						<img src={likeIcon} alt="Like" />
						<span className="video-action-btn__text">123k</span>
					</button>

					<button className="video-action-btn">
						<img src={dislikeIcon} alt="Dislike" />
						<span className="video-action-btn__text">435k</span>
					</button>

					<button className="video-action-btn">
						<img src={shareIcon} alt="Share" />
						<span>Share</span>
					</button>

					<button className="video-action-btn--more">
						<img src={moreIcon} alt="More" />
					</button>
				</div>
			</section>
		</div>
	);
}
