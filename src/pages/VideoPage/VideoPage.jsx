import "./VideoPage.css";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import VideoCard from "../../components/VideoCard/VideoCard";
import { recommendedVideos } from "./../../contants/data";

export default function VideoPage() {
	const handleVideoClick = (videoId) => {
		console.log(`Clicked on video ${videoId}`);
	};

	return (
		/* Main Container */
		<div className="video-page">
			<div className="video-page__main">
				<VideoPlayer />
				<VideoDescription />
			</div>

			{/* Sidebar Container */}
			<div className="video-page__sidebar">
				<div className="next-section">
					<div className="next-section__header">
						<h2 className="next-section__title">Next</h2>
						<div className="next-section__autoplay">
							<span className="autoplay-label">AUTOPLAY</span>
							<div className="autoplay-toggle">
								<div className="autoplay-toggle__switch"></div>
							</div>
						</div>
					</div>

					<div className="next-section__videos">
						{recommendedVideos.map(({ id, thumbnail, title, views, channel, duration }) => (
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
