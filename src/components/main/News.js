import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function News({ Scrolled, start }) {
	const members = useSelector((store) => store.members.data);
	const position = Scrolled - start || 0;
	return (
		<section id='news' className='myScroll'>
			<h1>News</h1>
			{members.map((member, idx) => {
				if (idx >= 1) return;
				return (
					<article key={idx}>
						<div className='member_intro'>
							<h2>About Us</h2>
							<h3>{member.name}</h3>
							<h4>{member.position}</h4>
							<p>
								THE HISTORY OF BANG & OLUFSEN
								<br />
								<br />
								In 1925, working out of a Danish farmhouse, Peter Bang and Svend
								Olufsen reinvented the radio, developing The Eliminator, the
								first mass-produced radio that could be plugged into the wall,
								without the need for a battery. A century later, that
								entrepreneurial spirit of innovation lives on in everything we
								do. It’s what drives us: to change how we all hear, see and feel
								the world.
							</p>
							<Link to='/Department'>VIEW MORE</Link>
						</div>
						<div className='pic'>
							<img
								src={process.env.PUBLIC_URL + '/img/' + member.pic}
								alt='여자멤버사진'
							/>
						</div>
						<p
							className='deco'
							style={{ transform: `translateY(${position}px)` }}
						>
							BANG &
						</p>
						<p
							className='deco2'
							style={{ transform: `translateY(${position * -1}px)` }}
						>
							OLUFSEN
						</p>
					</article>
				);
			})}
		</section>
	);
}

export default News;
