import axios from "axios";

const api = axios.create({
  baseURL: "https://botanical-wep-api.onrender.com",
});
export { api };
