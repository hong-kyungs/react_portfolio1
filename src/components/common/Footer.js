import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faYoutube,
	faInstagram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<footer>
			<div className='inner'>
				<div className='footer_txt'>
					<div className='company'>
						<img
							src={process.env.PUBLIC_URL + '/img/logo_footer.png'}
							alt='로고이름'
						/>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Veritatis vero cum autem quod quia vitae, sapiente accusantium
							distinctio possimus odio!
						</p>
					</div>

					<div className='contact'>
						<h2>CONTACT US</h2>
						<div className='address'>
							Bang & Olufsen 2F, Shinsegae Dept. Store Starfield Hanam, 750,
							Misa-daero
						</div>
						<div className='phone'>+82 31-8072-1517</div>
						<div className='email'>infoSE@bangolufsen.com</div>
					</div>

					<div className='sns'>
						<h2>FOLLOW US</h2>
						<p>Join us on</p>
						<div className='sns_set'>
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
								<FontAwesomeIcon icon={faYoutube} className='i' />
							</a>
						</div>
					</div>
				</div>
				<p>Copyright © Bang Olufsen Co. Ltd. All rights reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
