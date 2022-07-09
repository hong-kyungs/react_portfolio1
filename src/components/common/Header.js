import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowRightToBracket,
	faUser,
	faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

function Header() {
	return (
		<header>
			<div className='inner'>
				<h1>
					<a href='#'>
						<img src={'img/logoWhite.png'} alt='' />
					</a>
				</h1>
				<ul id='gnb'>
					<li>
						<a href='#'>Department</a>
					</li>
					<li>
						<a href='#'>Gallery</a>
					</li>
					<li>
						<a href='#'>Youtube</a>
					</li>
					<li>
						<a href='#'>Community</a>
					</li>
				</ul>
				<ul id='util'>
					<li>
						<a href='#'>
							<FontAwesomeIcon icon={faArrowRightToBracket} className='i' />
						</a>
					</li>
					<li>
						<a href='#'>
							<FontAwesomeIcon icon={faUser} className='i' />
						</a>
					</li>
					<li>
						<a href='#'>
							<FontAwesomeIcon icon={faLocationDot} className='i' />
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
