import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Popup from '../common/Popup';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Vids() {
	const [Vids, setVids] = useState([]);
	const pop = useRef(null);
	const swiperRef = useRef(null);
	const [Index, setIndex] = useState(0);
	useEffect(() => {
		const key = 'AIzaSyCVnqQLlCzUMqd8pqBHc34g-onr96Z0TaM';
		const playlist = 'PL0Rto-Av72qFwaOm3JsjR4hJymVst9V7u';
		const num = 7;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;
		axios.get(url).then((json) => {
			// console.log(json.data.items);
			setVids(json.data.items);
		});
	}, []);
	return (
		<>
			<section id='vids' className='myScroll'>
				<h1>Vids</h1>

				<Swiper
					modules={[Pagination, Navigation, Autoplay]}
					navigation={true}
					pagination={{
						clickable: true,
					}}
					slidesPerView={3}
					spaceBetween={20}
					loop={true}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: true,
					}}>
					{Vids.map((vid, idx) => {
						if (idx >= 5) return;
						return (
							<SwiperSlide key={idx}>
								<div className='inner'>
									<div
										className='pic'
										onClick={() => {
											setIndex(idx);
											pop.current.open();
											swiperRef.current.swiper.autoplay.stop();
										}}>
										<img
											src={vid.snippet.thumbnails.medium.url}
											alt={vid.snippet.title}
										/>
									</div>
									<h2>{vid.snippet.title}</h2>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</section>

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

export default Vids;
