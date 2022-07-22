import { useSelector } from 'react-redux';

function News() {
	const members = useSelector((store) => store.members.data);
	return (
		<section id='news'>
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
