import { useSelector } from 'react-redux';

function Vids() {
	const { youtube } = useSelector((store) => store.youtubeReducer);
	console.log(youtube);
	return (
		<section id='vids' className='myScroll'>
			<h1>Vids</h1>
			<div className='preview'>
				{youtube.map((vid, idx) => {
					if (idx >= 3) return;
					return (
						<div className='inner' key={idx}>
							<div className='pic'>
								<img
									src={vid.snippet.thumbnails.medium.url}
									alt={vid.snippet.title}
								/>
							</div>
							<h2>{vid.snippet.title}</h2>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Vids;
