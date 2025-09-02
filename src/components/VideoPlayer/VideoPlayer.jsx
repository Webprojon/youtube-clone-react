import "./VideoPlayer.css";
import videoCover from "../../assets/images/video-cover-main.png";
import likeIcon from "../../assets/icons/like-icon.svg";
import dislikeIcon from "../../assets/icons/dislike-icon.svg";
import shareIcon from "../../assets/icons/share-icon.svg";
import moreIcon from "../../assets/icons/more-icon.svg";

export default function VideoPlayer() {
	return (
		<div className="video-player">
			<div className="video-player__container">
				{/* Video Cover */}
				<div className="video-player__cover">
					<img src={videoCover} alt="Video thumbnail" />
				</div>

				{/* Video Controls Overlay */}
				<div className="video-player__controls">
					{/* Time Display */}
					<div className="video-player__time-display">
						<span className="video-player__time">1:34</span>
						<span className="video-player__time">19:00</span>
					</div>

					{/* Progress Bar */}
					<div className="video-player__progress-container">
						<div className="video-player__progress-bar">
							<div className="video-player__progress-fill"></div>
						</div>
					</div>

					{/* Bottom Controls */}
					<div className="video-player__bottom-controls">
						{/* Left Controls */}
						<div className="video-player__left-controls">
							{/* Pause Button */}
							<button className="video-player__pause-btn" aria-label="Pause">
								<span style={{ fontSize: "20px", color: "white" }}>⏸</span>
							</button>

							{/* Skip Forward Button */}
							<button className="video-player__next-btn" aria-label="Skip Forward">
								<span style={{ fontSize: "18px", color: "white" }}>⏭</span>
							</button>

							{/* Volume Control */}
							<div className="video-player__volume-control">
								<button className="video-player__volume-btn" aria-label="Volume">
									<span style={{ fontSize: "20px", color: "white" }}>🔊</span>
								</button>
								<div className="video-player__volume-slider">
									<div className="video-player__volume-track">
										<div className="video-player__volume-fill"></div>
									</div>
								</div>
							</div>
						</div>

						{/* Right Controls */}
						<div className="video-player__right-controls">
							{/* Closed Captions Button */}
							<button className="video-player__subtitles-btn" aria-label="Closed Captions">
								<span style={{ fontSize: "16px", color: "white", fontWeight: "bold" }}>CC</span>
							</button>

							{/* Settings Button */}
							<button className="video-player__settings-btn" aria-label="Settings">
								<span style={{ fontSize: "18px", color: "white" }}>⚙️</span>
							</button>

							{/* Picture-in-Picture Button */}
							<button className="video-player__size-btn" aria-label="Picture-in-Picture">
								<span style={{ fontSize: "18px", color: "white" }}>⛶</span>
							</button>

							{/* Full Screen Button */}
							<button className="video-player__fullscreen-btn" aria-label="Full Screen">
								<span style={{ fontSize: "18px", color: "white" }}>⛶</span>
							</button>
						</div>
					</div>
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
					<button className="video-action-btn video-action-btn--like">
						<div className="video-action-btn__icon">
							<img src={likeIcon} alt="Like" />
						</div>
						<span className="video-action-btn__text">123k</span>
					</button>

					<button className="video-action-btn video-action-btn--dislike">
						<div className="video-action-btn__icon">
							<img src={dislikeIcon} alt="Dislike" />
						</div>
						<span className="video-action-btn__text">435k</span>
					</button>

					<button className="video-action-btn video-action-btn--share">
						<div className="video-action-btn__icon">
							<img src={shareIcon} alt="Share" />
						</div>
						<span className="video-action-btn__text">Share</span>
					</button>

					<button className="video-action-btn--more">
						<img src={moreIcon} alt="More" />
					</button>
				</div>
			</section>
		</div>
	);
}
