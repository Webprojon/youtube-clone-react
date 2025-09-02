import React from "react";
import "./VideoCard.css";

const VideoCard = ({ thumbnail, title, views, channel, duration, onClick }) => {
	return (
		<div className="video-card" onClick={onClick}>
			<div className="video-thumbnail-container">
				<img src={thumbnail} alt={title} className="video-thumbnail" />
				<div className="video-duration">{duration}</div>
			</div>

			<div className="video-info">
				<h3 className="video-title">{title}</h3>
				<div className="video-meta">
					<span className="video-views">{views}</span>
					<span className="video-channel">{channel}</span>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
