import { useState, useEffect } from 'react';
function Reviews() {
	const [Posts, setPosts] = useState([]);

	useEffect(() => {
		let data = localStorage.getItem('post');
		data = JSON.parse(data);
		setPosts(data);
	}, []);

	return (
		<section id='reviews' className='myScroll'>
			<div className='bg'>
				<img
					src={process.env.PUBLIC_URL + '/img/reviews.jpg'}
					alt='인테리어사진'
				/>
			</div>

			<div className='review_con'>
				<h1>Share your experience</h1>
				<div className='inner'>
					{Posts.map((post, idx) => {
						if (idx >= 4) return;
						return (
							<article key={idx}>
								<h2>{post.title}</h2>
								<p>{post.content}</p>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Reviews;
