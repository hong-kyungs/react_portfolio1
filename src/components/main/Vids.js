import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { useState, useRef } from 'react';
import Popup from '../common/Popup';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Vids({ Scrolled, start }) {
	const Vids = useSelector((store) => store.youtube.data);
	const pop = useRef(null);
	const swiperRef = useRef(null);
	const [Index, setIndex] = useState(0);
	const position = Scrolled - start || 0;
	return (
		<>
			<section id='vids' className='myScroll'>
				<h1 style={{ transform: `scale(${position / 1000 + 1})` }}>
					Hear it. See it. Live it.
				</h1>
				<Swiper
					modules={[Pagination, Navigation, Autoplay]}
					navigation={true}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						700: {
							slidesPerView: 2,
						},
						1200: {
							slidesPerView: 3,
						},
					}}
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
