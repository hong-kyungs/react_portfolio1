import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Department() {
	const path = process.env.PUBLIC_URL;
	const [Members, setMembers] = useState([]);

	useEffect(() => {
		axios.get(`${path}/DB/members.json`).then((json) => {
			setMembers(json.data.members);
		});
	}, []);

	useEffect(() => {
		console.log(Members);
	}, [Members]);

	return (
		<Layout name={'Department'}>
			<p>Easy and Simple</p>
			<h2>Meet the Team</h2>
			{Members.map((member, idx) => {
				return (
					<article key={idx}>
						<div className='inner'>
							<div className='pic'>
								<img src={`${path}/img/${member.pic}`} alt={member.name} />
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
		</Layout>
	);
}

export default Department;
