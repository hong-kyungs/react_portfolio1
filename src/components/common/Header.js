import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowRightToBracket,
	faUser,
	faLocationDot,
	faBars,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Header(props) {
	const active = { color: 'lightpink' };
	return (
		<header className={props.type}>
			<div className='inner'>
				<h1>
					<NavLink exact to='/' className='a'>
						<img src={`${process.env.PUBLIC_URL}/img/whiteLogo.png`} alt='' />
					</NavLink>
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
						<NavLink to='/login'>
							<FontAwesomeIcon icon={faArrowRightToBracket} className='i' />
						</NavLink>
					</li>
					<li>
						<NavLink to='/members'>
							<FontAwesomeIcon icon={faUser} className='i' />
						</NavLink>
					</li>
					<li>
						<NavLink to='/location'>
							<FontAwesomeIcon icon={faLocationDot} className='i' />
						</NavLink>
					</li>
				</ul>
				<FontAwesomeIcon icon={faBars} />
			</div>
		</header>
	);
}

export default Header;
