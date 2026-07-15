import axios from "axios";

const api = axios.create({
  baseURL: "https://impactlink-mxjl.onrender.com"
});

export default api;