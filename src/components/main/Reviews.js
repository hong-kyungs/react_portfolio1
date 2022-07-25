import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

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
			<div className='inner'>
				<span>
					<FontAwesomeIcon icon={faQuoteLeft} />
				</span>
				{Posts.map((post, idx) => {
					if (idx >= 1) return;
					return (
						<article key={idx}>
							<h2>{post.title}</h2>
							<p>{post.content}</p>
						</article>
					);
				})}
				<div className='btnset'>
					<button className='prev'>prev</button>
					<button className='next'>next</button>
				</div>
			</div>
		</section>
	);
}

export default Reviews;
