import { useState, useEffect } from 'react';
function Reviews() {
	const getLocalData = () => {
		const dummyPosts = [
			{
				title: 'BANG OLUFSEN6',
				content:
					'Here comes description in detail.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aspernatur.',
			},
			{
				title: 'BANG OLUFSEN5',
				content:
					'Here comes description in detail.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ab.Lorem ipsum dolor sit amet.',
			},
			{
				title: 'BANG OLUFSEN4',
				content:
					'Here comes description in detail.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aspernatur.',
			},
			{
				title: 'BANG OLUFSEN3',
				content:
					'Here comes description in detail.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ab.Lorem ipsum dolor sit amet.',
			},
			{
				title: 'BANG OLUFSEN2',
				content:
					'Here comes description in detail.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aspernatur.',
			},
			{
				title: 'BANG OLUFSEN51',
				content:
					'Here comes description in detail.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aspernatur.',
			},
		];
		const data = localStorage.getItem('post');

		if (data) {
			return JSON.parse(data);
		} else {
			return dummyPosts;
		}
	};

	const [Posts] = useState(getLocalData());

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
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
