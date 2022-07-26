import { useSelector } from 'react-redux';
import Popup from '../common/Popup';
import { useState, useRef } from 'react';

function Pics() {
	const flickr = useSelector((store) => store.flickr.data);
	const pop = useRef(null);
	const [Index, setIndex] = useState(0);
	return (
		<section id='pics' className='myScroll'>
			<h1>Gallery & Art</h1>
			<div className='preview'>
				{flickr.map((pic, idx) => {
					if (idx >= 4) return;
					return (
						<li
							key={idx}
							onClick={() => {
								setIndex(idx);
								pop.current.open();
							}}>
							<img
								src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
								alt={pic.title}
							/>
						</li>
					);
				})}
			</div>
			<Popup ref={pop}>
				{flickr.length !== 0 && (
					<img
						src={`https://live.staticflickr.com/${flickr[Index].server}/${flickr[Index].id}_${flickr[Index].secret}_b.jpg`}
						alt={flickr[Index].title}
					/>
				)}
			</Popup>
		</section>
	);
}

export default Pics;
