import { useState, useEffect } from 'react';
import axios from 'axios';

function News() {
	const [Members, setMembers] = useState([]);
	const path = process.env.PUBLIC_URL;

	useEffect(() => {
		axios.get(`${path}/DB/members.json`).then((json) => {
			setMembers(json.data.members);
		});
	}, []);

	useEffect(() => {
		console.log(Members);
	}, [Members]);

	return (
		<section id='news' className='myScroll on'>
			<h1>News</h1>
			{Members.map((member, idx) => {
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
							<a href='/Community'>VIEW MORE</a>
						</div>
						<div className='pic'>
							<img src={`${path}/img/${member.pic}`} alt={member.name} />
						</div>
					</article>
				);
			})}
		</section>
	);
}

export default News;
