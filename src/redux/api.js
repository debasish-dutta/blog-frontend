import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

export const getBlogPosts = () => API.get("/api/blog");
export const getBlogPost = (id) => API.get(`/api/blog/${id}`);
