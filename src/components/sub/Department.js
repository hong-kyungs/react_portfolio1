import Layout from '../common/Layout';
import { useSelector } from 'react-redux';
import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Department() {
	const path = process.env.PUBLIC_URL;
	const members = useSelector((store) => store.members.data);
	const base = -100;
	const department = useRef(null);
	const pos = useRef([]);
	let divs = null;

	const getPos = () => {
		pos.current = [];
		divs = department.current.querySelectorAll('.myScroll');
		for (const div of divs) pos.current.push(div.offsetTop);
	};

	const activation = () => {
		const scroll = window.scrollY;
		pos.current.map((pos, idx) => {
			if (scroll >= pos + base) {
				// for (const div of divs) div.classList.remove('on');
				divs[idx].classList.add('on');
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

	return (
		<Layout name={'Department'}>
			<div className='department_scroll' ref={department}>
				<div className='intro_container myScroll'>
					<div className='wrap'>
						<div className='item'>
							<span>01</span>
							<h3>User Experience</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
								numquam?
							</p>
						</div>
						<div className='item'>
							<span>02</span>
							<h3>Graphic Design</h3>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
								rem.
							</p>
						</div>
						<div className='item'>
							<span>03</span>
							<h3>Develop System</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Perferendis, in!
							</p>
						</div>
					</div>
				</div>

				<div className='member_intro'>
					<p>Easy and Simple</p>
					<h2>Meet the Team</h2>
					<div className='article_wrap myScroll'>
						{members.map((member, idx) => {
							return (
								<article key={idx}>
									<div className='inner'>
										<div className='pic'>
											<img
												src={`${path}/img/${member.pic}`}
												alt={member.name}
											/>
										</div>
										<div className='txt'>
											<h3>{member.name}</h3>
											<p>{member.position}</p>
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
											<a href='#'>
												<FontAwesomeIcon icon={faEnvelope} className='i' />
											</a>
										</div>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Department;
