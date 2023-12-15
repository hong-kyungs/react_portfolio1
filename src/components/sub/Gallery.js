import Layout from '../common/Layout';
import Popup from '../common/Popup';
import { useState, useEffect, useRef } from 'react';
import Masonry from 'react-masonry-component';
import { fetchFlickr } from '../../redux/flickrSlice';
import { useSelector, useDispatch } from 'react-redux';
import Anime from '../../asset/anim';

function Gallery() {
	const dispatch = useDispatch();
	const flickr = useSelector((store) => store.flickr.data);
	const frame = useRef(null);
	const input = useRef(null);
	const pop = useRef(null);
	const [Opt, setOpt] = useState({ type: 'user', user: '195962412@N06' });
	// const [Items, setItems] = useState([]);
	const [Loading, setLoading] = useState(true);
	const [EnableClick, setEnableClick] = useState(true);
	const [Index, setIndex] = useState(0);
	const masonryOptions = { transitionDuration: '0.5s' };

	// const scroll = window.scrollY;
	// const inner = document.querySelector('.inner');
	// const [Scrolled, setScrolled] = useState(0);
	// const activation = () => {
	// 	console.log(inner.offsetTop);
	// 	console.log(scroll);
	// 	setScrolled(scroll);
	// 	if (scroll >= pos) {
	// 		inner.classList.add('active');
	// 	}
	// };

	const startLoading = () => {
		setLoading(true);
		frame.current.classList.remove('on');
	};

	const endLoading = () => {
		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
			setTimeout(() => setEnableClick(true), 1000);
		}, 1000);
	};

	const showInterest = () => {
		if (!EnableClick) return;
		setEnableClick(false);
		startLoading();
		setOpt({ type: 'interest' });
	};

	const showSearch = () => {
		if (!EnableClick) return;
		setEnableClick(false);
		const result = input.current.value.trim();
		input.current.value = '';
		if (!result) return alert('검색어를 입력하세요.');
		setLoading(true);
		setOpt({ type: 'search', tags: result });
	};

	const showUser = (e) => {
		if (!EnableClick) return;
		setEnableClick(false);
		let userID = '195962412@N06';
		e.target.innerText !== 'My Gallery' && (userID = e.target.innerText);
		startLoading(true);
		setOpt({ type: 'user', user: userID });
	};

	useEffect(() => {
		dispatch(fetchFlickr(Opt));
	}, [Opt]);

	useEffect(endLoading, [flickr]);

	return (
		<>
			<Layout name={'Gallery'}>
				{Loading && (
					<img
						className='loading'
						src={`${process.env.PUBLIC_URL}/img/loading.gif`}
						alt='로딩바'
					/>
				)}
				<span className='typo'>SPECIAL</span>
				<div className='list'>
					<div className='button'>
						<button onClick={showInterest}>Interest Gallery</button>
					</div>
					<div className='button'>
						<button onClick={showUser}>My Gallery</button>
					</div>
					<div className='searchBox'>
						<input
							type='text'
							placeholder='검색어를 입력하세요.'
							ref={input}
							onKeyUp={(e) => {
								if (e.key === 'Enter') showSearch();
							}}
						/>
						<button onClick={showSearch}>Search</button>
					</div>
				</div>

				<div className='frame' ref={frame}>
					<Masonry elementType={'div'} options={masonryOptions}>
						{flickr.map((item, idx) => {
							return (
								<article key={idx}>
									<div className='inner'>
										<div
											className='pic'
											onClick={() => {
												pop.current.open();
												setIndex(idx);
											}}
										>
											<img
												src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
												alt={item.title}
											/>
										</div>
										<h2>{item.title}</h2>
										<div className='profile'>
											<img
												src={`http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg`}
												alt={item.owner}
												onError={(e) => {
													e.target.setAttribute(
														'src',
														'https://www.flickr.com/images/buddyicon.gif'
													);
												}}
											/>
											<span onClick={showUser}>{item.owner}</span>
										</div>
									</div>
								</article>
							);
						})}
					</Masonry>
				</div>
			</Layout>

			<Popup ref={pop}>
				{flickr.length !== 0 && (
					<img
						src={`https://live.staticflickr.com/${flickr[Index].server}/${flickr[Index].id}_${flickr[Index].secret}_m.jpg`}
						alt={flickr[Index].title}
					/>
				)}
			</Popup>
		</>
	);
}

export default Gallery;
