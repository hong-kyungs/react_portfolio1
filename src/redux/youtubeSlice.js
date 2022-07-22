import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchYoutube = createAsyncThunk(
	'youtube/requestYoutube',
	async () => {
		const key = 'AIzaSyCVnqQLlCzUMqd8pqBHc34g-onr96Z0TaM';
		const playlist = 'PL0Rto-Av72qFwaOm3JsjR4hJymVst9V7u';
		const num = 7;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;
		const response = await axios.get(url);
		return response.data.items;
	}
);

const youtubeSlice = createSlice({
	name: 'youtube',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		[fetchYoutube.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchYoutube.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[fetchYoutube.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});

export default youtubeSlice.reducer;
