import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const getPodcasts = createAsyncThunk(
    "api/podcast",
    async (_, { rejectWithValue }) => {
      try {
        const response = await api.getPodcasts();
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );

  export const getPodcast = createAsyncThunk(
    "api/podcast",
    async (slug, { rejectWithValue }) => {
      try {
        const response = await api.getPodcast(slug);
        console.log("api call");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );

const podcastSlice = createSlice({
    name: "podcast",
    initialState:{
        podcasts: [],
        error: "",
        loading: false,
    },
    extraReducers:{
        [getPodcasts.pending]: (state, action) => {
            console.log("pending", action);
            state.loading = true;
          },
          [getPodcasts.fulfilled]: (state, action) => {
            console.log("action", action);
            state.loading = false;
            console.log("all: ", action.payload);
            state.podcasts = action.payload;
          },
          [getPodcasts.rejected]: (state, action) => {
            console.log("reject", action);
            state.loading = false;
            state.error = action.payload.message;
          },
          [getPodcast.pending]: (state, action) => {
            console.log("pending", action);
            state.loading = true;
          },
          [getPodcast.fulfilled]: (state, action) => {
            console.log("action", action);
            state.loading = false;
            console.log("aa: ", action.payload);
            state.podcasts = action.payload;
          },
          [getPodcast.rejected]: (state, action) => {
            console.log("reject", action);
            state.loading = false;
            state.error = action.payload.message;
          },
    }
})

export default podcastSlice.reducer;