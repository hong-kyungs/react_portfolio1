import Layout from '../common/Layout';
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Popup from '../common/Popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Youtube() {
	const pop = useRef(null);
	const [Open, setOpen] = useState(false);
	const [Index, setIndex] = useState(0);
	const Vids = useSelector((store) => store.youtube.data);
	const [Scrolled, setScrolled] = useState(0);

	const frame = useRef(null);
	const items = useRef([]);
	const pos = useRef(null);
	const base = -100;
	const scroll = window.scrollY;
	const articles = document.querySelectorAll('article');
	const sub_img = document.querySelector('.sub_img');

	const getPos = () => {
		pos.current = [];
		for (const article of articles) pos.current.push(article.offsetTop);
	};

	const activation = () => {
		const scroll = window.scrollY;
		setScrolled(scroll);
		pos.current.map((pos, idx) => {
			if (scroll >= pos + base) {
				articles[idx].classList.add('active');
			}
		});
	};

	useEffect(() => {
		frame.current.classList.add('on');
	}, []);

	useEffect(() => {
		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);
		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
		};
	}, [scroll]);

	return (
		<>
			<Layout name={'Youtube'}>
				<div className='article_wrap' ref={frame}>
					{Vids.map((vid, idx) => {
						const tit = vid.snippet.title;
						const desc = vid.snippet.description;
						const date = vid.snippet.publishedAt;

						return (
							<article key={idx} ref={items}>
								<div
									className='pic'
									onClick={() => {
										pop.current.open();
										setIndex(idx);
									}}>
									{idx === 0 ? (
										<img
											src={process.env.PUBLIC_URL + '/img/youtube1.jpg'}
											alt={vid.snippet.title}
										/>
									) : (
										<img
											src={vid.snippet.thumbnails.medium.url}
											alt={vid.snippet.title}
										/>
									)}
									<FontAwesomeIcon icon={faYoutube} className='i' />
								</div>
								<div className='txt'>
									<h3>
										{idx !== 0 && tit.length > 30
											? tit.substr(0, 30) + '...'
											: tit}
									</h3>
									{/* <h3>{tit.length > 30 ? tit.substr(0, 30) + '...' : tit}</h3> */}
									<p>
										{idx !== 0 && desc.length > 100
											? desc.substr(0, 100) + '...'
											: desc}
									</p>
									{/* <p>{desc.length > 150 ? desc.substr(0, 150) + '...' : desc}</p> */}
									<span>{date.split('T')[0]}</span>
								</div>
							</article>
						);
					})}
				</div>
			</Layout>
			<div className='sub_img'>
				<div className='img_con'>
					<img src={process.env.PUBLIC_URL + '/img/youtube_sub3.jpg'} alt='' />
				</div>
				<div className='txt'>
					<p>Watch our new video story</p>
					<span>
						Whether it's a cinematic centrepiece or a surround sound experience,
						we put you at the heart of the action. And that goes for design,
						too.
					</span>
				</div>
			</div>

			<Popup ref={pop}>
				{Vids.length !== 0 && (
					<iframe
						src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
						frameBorder='0'></iframe>
				)}
			</Popup>
		</>
	);
}

export default Youtube;
