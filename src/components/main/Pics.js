import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-component';

function Pics() {
	const frame = useRef(null);
	const [Items, setItems] = useState([]);
	const masonryOptions = { transitionDuration: '0.5s' };
	const getFlickr = async (opt) => {
		const key = '1410239e47f32f3f403f70fd3c998b38';
		const method_interest = 'flickr.interestingness.getList';
		const method_search = 'flickr.photos.search';
		const method_user = 'flickr.people.getPhotos';
		const num = 20;
		let url = '';
		if (opt.type === 'interest') {
			url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
		}
		if (opt.type === 'search') {
			url = `https://www.flickr.com/services/rest/?method=${method_search}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tags}`;
		}
		if (opt.type === 'user') {
			url = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${opt.user}`;
		}

		await axios.get(url).then((json) => {
			setItems(json.data.photos.photo);
		});
		// setTimeout(() => {
		// 	setLoading(false);
		// 	frame.current.classList.add('on');

		// 	setTimeout(() => {
		// 		setEnableClick(true);
		// 	}, 500);
		// }, 1000);
	};
	useEffect(() => {
		getFlickr({ type: 'user', user: '195962412@N06' });
	}, []);

	return (
		<section id='pics' className='myScroll'>
			<h1>Pics</h1>

			<div className='frame' ref={frame}>
				<Masonry elementType={'div'} options={masonryOptions}>
					{Items.map((item, idx) => {
						if (idx >= 3) return;
						return (
							<article key={idx}>
								<div className='inner'>
									<div className='pic'>
										<img
											src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
											alt={item.title}
										/>
									</div>
								</div>
							</article>
						);
					})}
				</Masonry>
			</div>
		</section>
	);
}

export default Pics;
