import { useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';

const Menu = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);
	const active = { color: '#fc8276' };

	useImperativeHandle(ref, () => {
		return {
			toggle: () => setOpen(!Open),
		};
	});

	return (
		<AnimatePresence>
			{Open && (
				<motion.nav
					id='mobileGnb'
					initial={{ x: 320, opacity: 1 }}
					animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
					exit={{ x: 320, opacity: 0, transition: { duration: 0.5 } }}
					onClick={() => setOpen(!Open)}>
					<div className='mobileGnb_inner'>
						<h1>
							<Link to='/' className='a'>
								<img
									src={process.env.PUBLIC_URL + '/img/logo_footer.png'}
									alt='로고이미지'
								/>
							</Link>
						</h1>
						<ul>
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
							<li>
								<NavLink to='/members' activeStyle={active}>
									Members
								</NavLink>
							</li>
							<li>
								<NavLink to='/location' activeStyle={active}>
									Location
								</NavLink>
							</li>
						</ul>
						<div className='sidebar_img'>
							<img
								src={process.env.PUBLIC_URL + '/img/sidebar.jpg'}
								alt='스피커사진'
							/>
						</div>
					</div>
				</motion.nav>
			)}
		</AnimatePresence>
	);
});

export default Menu;
