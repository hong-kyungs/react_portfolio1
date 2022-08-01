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
					src={
						process.env.PUBLIC_URL + '/img/main_ad.mp4'
					}></video>
				<div className='txt'>
					<div className='inner'>
						<h2>Advertisement</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Inventore, asperiores!
						</p>
					</div>
				</div>
			</div>

			<div className='txtBox'>
				<div>
					<h2>Item</h2>
					<div className='inner'>
						<p>Lorem ipsum dolor sit amet consectetur.</p>
					</div>
				</div>
				<div>
					<h2>Asset</h2>
					<div className='inner'>
						<p>Lorem, ipsum dolor.</p>
						<ul>
							<li>- amet consectetur </li>
						</ul>
					</div>
				</div>
				<div>
					<h2>Products</h2>
					<div className='inner'>
						<p>Lorem, ipsum.</p> <p>Lorem, ipsum dolor.</p>
					</div>
				</div>
				<div>
					<h2>News</h2>
					<div className='inner'>
						<p>Lorem ipsum dolor sit.</p>
						<p>02-4540-2422</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Ad;
