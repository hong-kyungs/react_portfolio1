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
		<figure id='visual' className='myScroll'>
			<ul className='panel' ref={panel}>
				<li className='on'>
					<img
						src={process.env.PUBLIC_URL + '/img/Main1.jpg'}
						alt='메인사진1'
					/>
					<div className='visual_txt'>
						<span>HEAR IT. SEE IT. LIVE IT.</span>
						<h2>The show starts here</h2>
						<p>
							Let the music pull you in. Let the action take you away.
							Discovering new levels of depth, detail and delight is what
							elevates every moment. And it's what drives us to create sound and
							vision experiences that go beyond expectation. So that every time
							you press play, you feel something new – right from the comfort of
							home.
						</p>
					</div>
				</li>
				<li>
					<img
						src={process.env.PUBLIC_URL + '/img/Main2.jpg'}
						alt='메인사진2'
					/>
					<div className='visual_txt'>
						<span>CONNECTED SPEAKERS</span>
						<h2>Speakers, simply connected</h2>
						<p>
							No cables, no fuss. Connect speakers quickly and easily through
							WiFi, and be connected everywhere. Control the whole experience
							from the palm of your hand: play what you want, the way you want.
						</p>
					</div>
				</li>
				<li>
					<img
						src={process.env.PUBLIC_URL + '/img/Main3.jpg'}
						alt='메인사진3'
					/>
					<div className='visual_txt'>
						<span>HOME THEATRE SYSTEMS</span>
						<h2>Remastering the home cinema experience</h2>
						<p>
							Discover the thrill of upgrading a Beovision TV with our stunning
							speakers and creating your own home cinema experience. Your
							possibilities are endless, and the experience is guaranteed to
							bring a smile on your face.
						</p>
					</div>
				</li>
				<li>
					<img
						src={process.env.PUBLIC_URL + '/img/Main4.jpg'}
						alt='메인사진4'
					/>
					<div className='visual_txt'>
						<span>MAKE WORKING FROM HOME A PLEASURE</span>
						<h2>Work from home</h2>
						<p>
							Working from home has moved from an occasional occurrence to an
							everyday expectation. Embrace the potential for flexibility and
							reduce challenges by creating a home office space that supports
							and nourishes you.
						</p>
					</div>
				</li>
				<li>
					<img
						src={process.env.PUBLIC_URL + '/img/Main5.jpg'}
						alt='메인사진5'
					/>
					<div className='visual_txt'>
						<span>BANG & OLUFSEN</span>
						<h2>Our journey into gaming</h2>
						<p>
							Bang & Olufsen engineers are always searching for the next way to
							enhance listening experiences and in recent years, the world of
							gaming has presented itself as an increasingly compelling pastime.
							Gaming can be as immersive as watching a movie with surround sound
							– with the right headphones.
						</p>
					</div>
				</li>
			</ul>

			<ul className='navi' ref={navi}>
				{[0, 1, 2, 3, 4].map((num) => {
					return <li key={num} onClick={() => showIndex(num)}></li>;
				})}
			</ul>

			<button className='prev' onClick={showPrev}>
				P R E V
			</button>
			<button className='next' onClick={showNext}>
				N E X T
			</button>
		</figure>
	);
}

export default Visual;
