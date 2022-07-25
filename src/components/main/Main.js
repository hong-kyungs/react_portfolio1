import Header from '../common/Header';
import Visual from './Visual';
import News from './News';
import Ad from './Ad';
import Pics from './Pics';
import Vids from './Vids';
import Reviews from './Reviews';
import Btns from './Btns';
import Anime from '../../asset/anim';
import { useEffect, useRef, useState } from 'react';

function Main() {
	const main = useRef(null);
	const pos = useRef([]);
	const [Index, setIndex] = useState(0);
	let secs = null;

	const getPos = () => {
		pos.current = [];
		secs = main.current.querySelectorAll('.myScroll');
		for (const sec of secs) pos.current.push(sec.offsetTop);
		// console.log(pos.current);
	};
	const activation = () => {
		const base = -window.innerHeight / 2;
		const scroll = window.scrollY;
		const btns = main.current.querySelectorAll('.scroll_navi li');
		pos.current.map((pos, idx) => {
			if (scroll >= pos + base) {
				for (const btn of btns) btn.classList.remove('on');
				for (const sec of secs) sec.classList.remove('on');
				btns[idx].classList.add('on');
				secs[idx].classList.add('on');
			}
		});
	};

	useEffect(() => {
		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);
		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
		};
	}, []);

	useEffect(() => {
		new Anime(window, {
			prop: 'scroll',
			value: pos.current[Index],
			duration: 500,
		});
	}, [Index]);

	return (
		<main ref={main}>
			<Header type={'main'} />
			<Visual />
			<News />
			<Ad />
			<Pics />
			<Vids />
			<Reviews />
			<Btns setIndex={setIndex} />
		</main>
	);
}

export default Main;
