import styles from "./VideoPlayer.module.css";
import {
	videoCover,
	likeIcon,
	dislikeIcon,
	shareIcon,
	moreIcon,
	pauseIcon,
	nextIcon,
	DesktopvolumeIcon,
	MobilevolumeIcon,
	ccIcon,
	settingsIcon,
	sizeIcon,
	fullscreenIcon,
} from "../../assets";

export default function VideoPlayer() {
	return (
		<div className={styles.videoPlayer}>
			<div className={styles.videoPlayerContainer}>
				{/* Video Cover */}
				<div className={styles.videoPlayerCover}>
					<img src={videoCover} alt="Video thumbnail" />
				</div>

				{/* Desktop Video Controls Overlay */}
				<div className={styles.videoPlayerControls}>
					{/* Time Display */}
					<div className={styles.videoPlayerTimeDisplay}>
						<span>1:34</span>
						<span>19:00</span>
					</div>

					{/* Progress Bar */}
					<div className={styles.videoPlayerProgressBar}>
						<div className={styles.videoPlayerProgressFill}></div>
					</div>

					{/* Bottom Controls */}
					<div className={styles.videoPlayerBottomControls}>
						{/* Left Controls */}
						<div className={styles.videoPlayerLeftControls}>
							<button className={styles.videoPlayerPauseBtn} aria-label="Pause">
								<img src={pauseIcon} alt="Pause" />
							</button>
							<button className={styles.videoPlayerNextBtn} aria-label="Skip Forward">
								<img src={nextIcon} alt="Next" />
							</button>
							<button className={styles.videoPlayerVolumeBtn} aria-label="Volume">
								<img src={DesktopvolumeIcon} alt="Volume" />
							</button>
						</div>

						{/* Right Controls */}
						<div className={styles.videoPlayerRightControls}>
							<button className={styles.videoPlayerSubtitlesBtn} aria-label="Closed Captions">
								<img src={ccIcon} alt="Closed Captions" />
							</button>
							<button className={styles.videoPlayerSettingsBtn} aria-label="Settings">
								<img src={settingsIcon} alt="Settings" />
							</button>
							<button className={styles.videoPlayerSizeBtn} aria-label="Picture-in-Picture">
								<img src={sizeIcon} alt="Size" />
							</button>
							<button className={styles.videoPlayerFullscreenBtn} aria-label="Full Screen">
								<img src={fullscreenIcon} alt="Full Screen" />
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Video Controls Overlay */}
				<div className={styles.videoPlayerMobileControls}>
					<button className={styles.videoPlayerMobileBtn} aria-label="Pause">
						<img src={pauseIcon} alt="Pause" />
					</button>
					<span>1:34</span>
					<div className={styles.videoPlayerMobileProgressBar}>
						<div className={styles.videoPlayerMobileProgressFill}></div>
					</div>
					<span>-10:00</span>
					<button className={styles.videoPlayerMobileBtn} aria-label="Volume">
						<img src={MobilevolumeIcon} alt="Volume" />
					</button>
				</div>
			</div>

			{/* Video Info */}
			<section className={styles.videoPlayerInfo}>
				<div className={styles.videoPlayerInfoTitle}>
					<h1 className={styles.videoPlayerTitle}>Dude You Re Getting A Telescope</h1>
					<p className={styles.videoPlayerViews}>123k views</p>
				</div>

				{/* Action Buttons */}
				<div className={styles.videoActions}>
					<button className={styles.videoActionBtn}>
						<img src={likeIcon} alt="Like" />
						<span className={styles.videoActionBtnText}>123k</span>
					</button>

					<button className={styles.videoActionBtn}>
						<img src={dislikeIcon} alt="Dislike" />
						<span className={styles.videoActionBtnText}>435k</span>
					</button>

					<button className={styles.videoActionBtn}>
						<img src={shareIcon} alt="Share" />
						<span>Share</span>
					</button>

					<button className={styles.videoActionBtnMore}>
						<img src={moreIcon} alt="More" />
					</button>
				</div>
			</section>
		</div>
	);
}
