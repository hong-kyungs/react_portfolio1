import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowRightToBracket,
	faUser,
	faLocationDot,
	faBars,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom';
import Menu from './Menu';
import { useRef } from 'react';

function Header(props) {
	const menu = useRef(null);
	const active = { color: '#fc8276' };
	let url = '';
	props.type === 'main'
		? (url = process.env.PUBLIC_URL + '/img/logo_w.png')
		: (url = process.env.PUBLIC_URL + '/img/logo_b.png');
	return (
		<>
			<header className={props.type}>
				<div className='inner'>
					<h1>
						<Link to='/' className='a'>
							<img src={url} alt='로고이미지' />
						</Link>
					</h1>
					<ul id='gnb'>
						<li>
							<NavLink to='/department' activeStyle={active}>
								Department
							</NavLink>
						</li>
						<li>
							<NavLink to='/gallery' activeStyle={active}>
								Gallery
							</NavLink>
						</li>
						<li>
							<NavLink to='/youtube' activeStyle={active}>
								Youtube
							</NavLink>
						</li>
						<li>
							<NavLink to='/community' activeStyle={active}>
								Community
							</NavLink>
						</li>
					</ul>
					<ul id='util'>
						<li>
							<NavLink
								to='/login'
								activeStyle={active}
								activeClassName='active'>
								<FontAwesomeIcon icon={faArrowRightToBracket} className='i' />
							</NavLink>
						</li>
						<li>
							<NavLink to='/members' activeStyle={active}>
								<FontAwesomeIcon icon={faUser} className='i' />
							</NavLink>
						</li>
						<li>
							<NavLink to='/location' activeStyle={active}>
								<FontAwesomeIcon icon={faLocationDot} className='i' />
							</NavLink>
						</li>
					</ul>
					<FontAwesomeIcon
						icon={faBars}
						onClick={() => {
							// console.log(menu.current);
							menu.current.toggle();
						}}
					/>
				</div>
			</header>

			<Menu ref={menu} />
		</>
	);
}

export default Header;
