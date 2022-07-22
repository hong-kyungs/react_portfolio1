import { useSelector } from 'react-redux';

function Pics() {
	const flickr = useSelector((store) => store.flickr.data);
	return (
		<section id='pics'>
			<h1>Pics</h1>
			<div className='preview'>
				{flickr.map((pic, idx) => {
					if (idx >= 5) return;
					return (
						<li key={idx}>
							<img
								src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
								alt={pic.title}
							/>
						</li>
					);
				})}
			</div>
		</section>
	);
}

export default Pics;
