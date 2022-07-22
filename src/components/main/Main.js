import Header from '../common/Header';
import Visual from './Visual';
import News from './News';
import Pics from './Pics';
import Vids from './Vids';
import Reviews from './Reviews';

function Main() {
	return (
		<>
			<Header type={'main'} />
			<Visual />
			<News />
			<Pics />
			<Vids />
			<Reviews />
		</>
	);
}

export default Main;
