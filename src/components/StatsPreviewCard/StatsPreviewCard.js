import React from 'react';
import headerDesktop from '../../assets/images/image-header-desktop.jpg';
import './StatsPreviewCard.scss';
const StatsPreviewCard = () => {
	return (
		<main>
			<div className="container">
				<div className="stats-card">
					<div className="stats-info">
						<h1>
							Get <span>insights</span> that help your business grow.
						</h1>
						<p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
						<div className="stats-details">
							<div className="stats-box">
								<h2>10k+</h2>
								<p>companies</p>
							</div>
							<div className="stats-box">
								<h2>314 </h2>
								<p>templates</p>
							</div>
							<div className="stats-box">
								<h2>12M+ </h2>
								<p>queries</p>
							</div>
						</div>
					</div>
					<div className="stats-image">
						<img src={headerDesktop} alt="" />
					</div>
				</div>

				<div class="attribution">
					Challenge by{' '}
					<a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer" aria-label="Link to frontend mentor">
						Frontend Mentor
					</a>
					. Coded by
					<a
						href="https://github.com/abishekbardewa/stats-preview-card-component"
						rel="noreferrer"
						aria-label="Link to Abishek Bardewa Github Profile"
					>
						{' '}
						Abishek Bardewa
					</a>
					.
				</div>
			</div>
		</main>
	);
};

export default StatsPreviewCard;
