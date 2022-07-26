import React from 'react';

function Ad() {
	return (
		<section id='ad' className='myScroll'>
			<h1>Your senses. Set Free.</h1>
			<div className='video'>
				<video
					loop
					muted
					autoPlay
					src={process.env.PUBLIC_URL + '/img/main_ad.mp4'}></video>
			</div>
		</section>
	);
}

export default Ad;
