import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Popup from '../common/Popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Youtube() {
	const [Vids, setVids] = useState([]);
	const [Open, setOpen] = useState(false);
	const [Index, setIndex] = useState(0);

	useEffect(() => {
		const key = 'AIzaSyCVnqQLlCzUMqd8pqBHc34g-onr96Z0TaM';
		const playlist = 'PL0Rto-Av72qFwaOm3JsjR4hJymVst9V7u';
		const num = 7;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;
		axios.get(url).then((json) => {
			// console.log(json.data.items);
			setVids(json.data.items);
		});
	}, []);

	return (
		<>
			<Layout name={'Youtube'}>
				{Vids.map((vid, idx) => {
					const tit = vid.snippet.title;
					const desc = vid.snippet.description;
					const date = vid.snippet.publishedAt;

					return (
						<article key={idx}>
							<div
								className='pic'
								onClick={() => {
									setOpen(true);
									setIndex(idx);
								}}>
								<img
									src={vid.snippet.thumbnails.medium.url}
									alt={vid.snippet.title}
								/>
								<FontAwesomeIcon icon={faYoutube} className='i' />
							</div>
							<div className='txt'>
								<h3>{tit.length > 30 ? tit.substr(0, 30) + '...' : tit}</h3>
								<p>{desc.length > 150 ? tit.substr(0, 150) + '...' : desc}</p>
								<span>{date.split('T')[0]}</span>
							</div>
						</article>
					);
				})}
			</Layout>

			{Open && (
				<Popup setOpen={setOpen}>
					<iframe
						src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
						frameborder='0'></iframe>
				</Popup>
			)}
		</>
	);
}

export default Youtube;
