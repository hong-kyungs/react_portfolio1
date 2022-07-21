import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Members from '../sub/Members';

function News() {
	const members = useSelector((store) => store.memberReducer.members);
	return (
		<section id='news' className='myscroll'>
			<h1>News</h1>
			<div className='members'>
				{members.map((member, idx) => {
					if (idx >= 5) return;
					return (
						<img
							key={idx}
							src={process.env.PUBLIC_URL + '/img/' + member.pic}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default News;
