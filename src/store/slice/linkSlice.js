import { API_BASE_URL } from "config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createShortLink = createAsyncThunk(
	"links/createShortLink",
	async (url) => {
		const response = await axios.post(API_BASE_URL + url)
		return response.data
	}
)

const initialState = {
	items: [],
	loading: "idle"
}

const linkSlice = createSlice({
	name: "links",
	initialState,
	extraReducers: {
		[createShortLink.rejected]: (state) => { state.loading = "rejected" },
		[createShortLink.pending]: (state) => {
			state.loading = "loading"
		},
		[createShortLink.fulfilled]: (state, action) => {
			const { ok, result } = action.payload
			if (ok) {
				state.items.push(result)
				state.loading = "idle"
			} else {
				state.loading = "error"
			}
		}
	}
})

export const selectLoading = (state => state.links.loading)
export const selectLinks = (state => state.links.items)
export default linkSlice.reducer