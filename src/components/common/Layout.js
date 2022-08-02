import { useRef, useEffect } from 'react';
import Anime from '../../asset/anim';

function Layout(props) {
	const figure = useRef();
	const frame = useRef(null);

	useEffect(() => {
		if (document.querySelector('.Department'))
			document.querySelector('.Department').classList.add('on');
		frame.current.classList.add('active');
		new Anime(window, {
			prop: 'scroll',
			value: 0,
			duration: 0,
		});
	}, []);

	return (
		<section className={`content ${props.name}`} ref={figure}>
			<figure>
				<img
					src={`${process.env.PUBLIC_URL}/img/${props.name}.jpg`}
					alt='{props.name}'
				/>
			</figure>
			<div className='inner' ref={frame}>
				<h1>{props.name}</h1>
				{props.children}
			</div>
		</section>
	);
}

export default Layout;
