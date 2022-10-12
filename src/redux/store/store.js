import { configureStore } from "@reduxjs/toolkit";
import blogPostReducer from "../slice/BlogPostSlice";

export default configureStore({
  reducer: {
    posts: blogPostReducer
  },
});
