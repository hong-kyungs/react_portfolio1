import axios from 'axios';

export const fetchMembers = async () => {
	const url = process.env.PUBLIC_URL + '/DB/members.json';
	return await axios.get(url);
};

export const fetchYoutube = async () => {
	const key = 'AIzaSyCVnqQLlCzUMqd8pqBHc34g-onr96Z0TaM';
	const playlist = 'PL0Rto-Av72qFwaOm3JsjR4hJymVst9V7u';
	const num = 7;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;
	return await axios.get(url);
};
