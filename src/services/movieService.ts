import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

const TMDB_BEARER_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

if (!TMDB_BEARER_TOKEN) {
  console.warn("TMDB Bearer token not found. Set VITE_TMDB_TOKEN in your .env");
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 10_000,
  headers: {
    Authorization: `Bearer ${TMDB_BEARER_TOKEN}`,
  },
});
