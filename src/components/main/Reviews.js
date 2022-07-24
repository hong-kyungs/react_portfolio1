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
			<h1>Reviews</h1>
			{Posts.map((post, idx) => {
				if (idx >= 3) return;
				return (
					<article key={idx}>
						<h2>{post.title}</h2>
						<p>{post.content}</p>
					</article>
				);
			})}
		</section>
	);
}

export default Reviews;
