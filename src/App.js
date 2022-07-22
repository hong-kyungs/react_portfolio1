import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMembers } from './redux/memberSlice';
import { fetchYoutube } from './redux/youtubeSlice';
import { fetchFlickr } from './redux/flickrSlice';
//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main
import Main from './components/main/Main';

//sub
import Department from './components/sub/Department';
import Youtube from './components/sub/Youtube';
import Gallery from './components/sub/Gallery';
import Community from './components/sub/Community';
import Location from './components/sub/Location';
import Members from './components/sub/Members';
import Login from './components/sub/Login';

import './scss/style.scss';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMembers());
		dispatch(fetchYoutube());
		dispatch(fetchFlickr({ type: 'interest' }));
	}, []);

	return (
		<>
			<Switch>
				<Route exact path='/' component={Main} />

				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>

			<Route path='/department' component={Department} />

			<Route path='/youtube' component={Youtube} />

			<Route path='/gallery' component={Gallery} />

			<Route path='/community' component={Community} />

			<Route path='/location' component={Location} />

			<Route path='/members' component={Members} />

			<Route path='/login' component={Login} />

			<Footer />
		</>
	);
}

export default App;
