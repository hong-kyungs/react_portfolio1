import Anime from '../../asset/anim';
import { useRef, useState, useEffect } from 'react';

function Visual() {
	const panel = useRef(null);
	const navi = useRef(null);
	let panel_li = null;
	const [Index, setIndex] = useState(0);

	const showNext = () => {
		panel_li = panel.current.children;
		const len = panel_li.length;
		const currentEl = panel.current.querySelector('.on');
		const current_index = Array.from(panel_li).indexOf(currentEl);
		let next_index = null;
		current_index !== len - 1
			? (next_index = current_index + 1)
			: (next_index = 0);

		showSlide(currentEl, next_index, 1);
	};

	const showPrev = () => {
		panel_li = panel.current.children;
		const len = panel_li.length;
		const currentEl = panel.current.querySelector('.on');
		const current_index = Array.from(panel_li).indexOf(currentEl);
		let prev_index = null;
		current_index !== 0
			? (prev_index = current_index - 1)
			: (prev_index = len - 1);

		showSlide(currentEl, prev_index, -1);
	};

	const showIndex = (index) => {
		panel_li = panel.current.children;
		const len = panel_li.length;
		const target_index = index;
		const currentEl = panel.current.querySelector('.on');
		const current_index = Array.from(panel_li).indexOf(currentEl);
		if (target_index > current_index) showSlide(currentEl, target_index, 1);
		if (target_index < current_index) showSlide(currentEl, target_index, -1);
	};

	const showSlide = (el, index, direction) => {
		new Anime(el, {
			prop: 'left',
			value: -direction * 100 + '%',
			duration: 500,
			callback: () => {
				el.classList.remove('on');
				el.style.display = 'none';
			},
		});

		panel_li[index].style.display = 'flex';
		panel_li[index].style.left = direction * 100 + '%';

		new Anime(panel_li[index], {
			prop: 'left',
			value: '0%',
			duration: 500,
			callback: () => {
				panel_li[index].classList.add('on');
			},
		});
		setIndex(index);
	};
	useEffect(() => {
		for (const el of navi.current.children) el.classList.remove('on');
		navi.current.children[Index].classList.add('on');
	}, [Index]);

	return (
		<figure id='visual'>
			<ul className='panel' ref={panel}>
				<li className='on'>
					<img
						src={process.env.PUBLIC_URL + '/img/Main1.jpg'}
						alt='????????????1'
					/>
				</li>
				<li>
					<img
						src={process.env.PUBLIC_URL + '/img/Main2.jpg'}
						alt='????????????2'
					/>
				</li>
				<li>
					<img
						src={process.env.PUBLIC_URL + '/img/Main3.jpg'}
						alt='????????????3'
					/>
				</li>
				<li>
					<img
						src={process.env.PUBLIC_URL + '/img/Main4.jpg'}
						alt='????????????4'
					/>
				</li>
				<li>
					<img
						src={process.env.PUBLIC_URL + '/img/Main5.jpg'}
						alt='????????????5'
					/>
				</li>
			</ul>

			<ul className='navi' ref={navi}>
				{[0, 1, 2, 3, 4].map((num) => {
					return <li key={num} onClick={() => showIndex(num)}></li>;
				})}
			</ul>

			<button className='prev' onClick={showPrev}>
				prev
			</button>
			<button className='next' onClick={showNext}>
				next
			</button>
		</figure>
	);
}

export default Visual;
