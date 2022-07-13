import Layout from '../common/Layout';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

function Location() {
	const { kakao } = window;
	const info = [
		{
			title: 'Hanam',
			latlng: new kakao.maps.LatLng(37.545720166263976, 127.22366924412243),
			imgUrl: `${process.env.PUBLIC_URL}/img/marker.svg`,
			imgSize: new kakao.maps.Size(50, 50),
			imgPos: { offset: new kakao.maps.Point(25, 50) },
			address:
				'Bang & Olufsen 2F, Shinsegae Dept. Store Starfield Hanam, 750, Misa-daero',
			phone: '+82 31-8072-1517',
			email: 'infoSE@bangolufsen.com',
		},
		{
			title: 'Seoul',
			latlng: new kakao.maps.LatLng(37.52807591500613, 127.04142893502548),
			imgUrl: `${process.env.PUBLIC_URL}/img/marker.svg`,
			imgSize: new kakao.maps.Size(50, 50),
			imgPos: { offset: new kakao.maps.Point(20, 40) },
			address:
				'Galleria Department Store East 4F, 343 Apgujeong-ro, Gangnam-gu, Seoul',
			phone: '+82 2-545-1380',
			email: 'infoSE@bangolufsen.com',
		},
		{
			title: 'Busan',
			latlng: new kakao.maps.LatLng(35.17005028983704, 129.1310882164908),
			imgUrl: `${process.env.PUBLIC_URL}/img/marker.svg`,
			imgSize: new kakao.maps.Size(50, 50),
			imgPos: { offset: new kakao.maps.Point(20, 40) },
			address:
				'Bang & Olufsen 5F, Shinsegae Dept. Store Centumcity, 35, Centum nam-daero',
			phone: '+82 51-745-1517',
			email: 'infoBU@bangolufsen.com',
		},
	];
	const container = useRef(null);
	const [Location, setLocation] = useState(null);
	const [Traffic, setTraffic] = useState(false);
	const [Info] = useState(info);
	const [Index, setIndex] = useState(0);

	const option = {
		center: Info[Index].latlng,
		level: 3,
	};

	const markerPosition = Info[Index].latlng;
	const imageSrc = Info[Index].imgUrl;
	const imageSize = Info[Index].imgSize;
	const imageOption = Info[Index].imgPos;
	const markerImage = new kakao.maps.MarkerImage(
		imageSrc,
		imageSize,
		imageOption
	);

	const marker = new kakao.maps.Marker({
		position: markerPosition,
		image: markerImage,
	});

	useEffect(() => {
		if (!Location) return;
		Traffic
			? Location.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
			: Location.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	}, [Traffic]);

	useEffect(() => {
		container.current.innerHTML = '';

		const map_instance = new kakao.maps.Map(container.current, option);
		marker.setMap(map_instance);
		setLocation(map_instance);

		const handleResize = () => {
			// console.log('location 컴포넌트에 리사이즈 이벤트 발생!');
			map_instance.setCenter(Info[Index].latlng);
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [Index]);

	return (
		<Layout name={'Location'}>
			<div className='location_intro'>
				<span>Contact from</span>
				<h2>GET TO US</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aperiam,
					nobis ipsam distinctio dolor, autem ducimus accusantium placeat
					laboriosam perspiciatis, reprehenderit numquam dolores enim optio
					praesentium assumenda! Totam voluptatem officiis eveniet possimus
					aspernatur cumque similique! Illum iure repellat libero ipsam.
				</p>
			</div>
			<ul id='branch'>
				{Info.map((info, idx) => {
					let on = '';
					Index === idx ? (on = 'on') : (on = '');
					return (
						<li key={idx} onClick={() => setIndex(idx)} className={on}>
							<div className='branch_info'>
								<h3>{info.title}</h3>
								<div className='address'>{info.address}</div>
								<div className='phone'>{info.phone}</div>
								<div className='email'>{info.email}</div>
							</div>
						</li>
					);
				})}
			</ul>
			<div id='map' ref={container}></div>
			<button onClick={() => setTraffic(!Traffic)}>
				{Traffic ? 'Traffic OFF' : 'Traffic ON'}
			</button>
			<ul id='contact_info'>
				<li>
					<span>Get in touch</span>
					<h2>CONTACT</h2>
					<form>
						<textarea
							name='comments'
							id='comments'
							placeholder='Message'
							cols='30'
							rows='1'></textarea>
						<input type='text' name='name' placeholder='name' />
						<input type='text' name='email' placeholder='E-mail' />
						<input type='submit' value='Submit' />
					</form>
				</li>
				<li>
					<span>Discover more</span>
					<h2>RESERVATIONS</h2>
					<div className='reserve_info'>
						<div className='address'>
							Bang & Olufsen 2F, Shinsegae Dept. Store Starfield Hanam, 750,
							Misa-daero
						</div>
						<div className='phone'>+82 31-8072-1517</div>
						<div className='email'>infoSE@bangolufsen.com</div>
					</div>
					<div className='sns'>
						<a href='#'>
							<FontAwesomeIcon icon={faFacebookF} className='i' />
						</a>
						<a href='#'>
							<FontAwesomeIcon icon={faTwitter} className='i' />
						</a>
						<a href='#'>
							<FontAwesomeIcon icon={faInstagram} className='i' />
						</a>
					</div>
				</li>
			</ul>
		</Layout>
	);
}

export default Location;
