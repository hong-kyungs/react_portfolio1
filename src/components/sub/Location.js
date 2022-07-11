import Layout from '../common/Layout';
import { useEffect, useRef, useState } from 'react';

function Location() {
	const { kakao } = window;
	const info = [
		{
			title: 'Hanam',
			latlng: new kakao.maps.LatLng(37.545720166263976, 127.22366924412243),
			imgUrl: `${process.env.PUBLIC_URL}/img/marker.svg`,
			imgSize: new kakao.maps.Size(50, 50),
			imgPos: { offset: new kakao.maps.Point(25, 50) },
		},
		{
			title: 'Seoul',
			latlng: new kakao.maps.LatLng(37.52807591500613, 127.04142893502548),
			imgUrl: `${process.env.PUBLIC_URL}/img/marker.svg`,
			imgSize: new kakao.maps.Size(50, 50),
			imgPos: { offset: new kakao.maps.Point(20, 40) },
		},
		{
			title: 'Busan',
			latlng: new kakao.maps.LatLng(35.17005028983704, 129.1310882164908),
			imgUrl: `${process.env.PUBLIC_URL}/img/marker.svg`,
			imgSize: new kakao.maps.Size(50, 50),
			imgPos: { offset: new kakao.maps.Point(20, 40) },
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
			<ul id='branch'>
				{Info.map((info, idx) => {
					let on = '';
					Index === idx ? (on = 'on') : (on = '');
					return (
						<li key={idx} onClick={() => setIndex(idx)} className={on}>
							{info.title}
						</li>
					);
				})}
			</ul>
			<div id='map' ref={container}></div>
			<button onClick={() => setTraffic(!Traffic)}>
				{Traffic ? 'Traffic OFF' : 'Traffic ON'}
			</button>
		</Layout>
	);
}

export default Location;
