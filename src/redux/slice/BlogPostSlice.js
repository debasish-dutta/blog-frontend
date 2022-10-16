import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const getBlogPosts = createAsyncThunk(
    "api/blog",
    async (_, { rejectWithValue }) => {
      try {
        const response = await api.getBlogPosts();
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );

  export const getBlogPost = createAsyncThunk(
    "api/blog",
    async (slug, { rejectWithValue }) => {
      try {
        const response = await api.getBlogPost(slug);
        console.log("api call");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );

const blogPostsSlice = createSlice({
    name: "blog",
    initialState:{
        posts: [],
        error: "",
        loading: false,
    },
    extraReducers:{
        [getBlogPosts.pending]: (state, action) => {
            console.log("pending", action);
            state.loading = true;
          },
          [getBlogPosts.fulfilled]: (state, action) => {
            console.log("action", action);
            state.loading = false;
            // console.log("aa: ", action.payload);
            state.posts = action.payload;
          },
          [getBlogPosts.rejected]: (state, action) => {
            console.log("reject", action);
            state.loading = false;
            state.error = action.payload.message;
          },
          [getBlogPost.pending]: (state, action) => {
            console.log("pending", action);
            state.loading = true;
          },
          [getBlogPost.fulfilled]: (state, action) => {
            console.log("action", action);
            state.loading = false;
            console.log("aa: ", action.payload);
            state.posts = action.payload;
          },
          [getBlogPost.rejected]: (state, action) => {
            console.log("reject", action);
            state.loading = false;
            state.error = action.payload.message;
          },
    }
})

export default blogPostsSlice.reducer;