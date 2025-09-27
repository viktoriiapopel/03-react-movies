import axios from "axios";
import type { AxiosInstance, AxiosResponse, } from "axios";
import type { Movie } from "../types/movie";

const TMDB_BEARER_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

if (!TMDB_BEARER_TOKEN) {
  console.warn("TMDB Bearer token not found. Set VITE_TMDB_TOKEN in your .env");
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${TMDB_BEARER_TOKEN}`,
  },
});

interface TMDBResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
//  @param query — назва фільму
//  * @returns масив фільмів
//  */
export async function fetchMovies(query: string): Promise<TMDBResponse> {
  try {
    const response: AxiosResponse<TMDBResponse> = await axiosInstance.get(
      "/search/movie",
      {
        params: {
          query,
        },
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      throw new Error(error.response?.data?.status_message || "Failed to fetch movies");
    } else {
      console.error("Unexpected error:", error);
      throw new Error("Unexpected error occurred");
    }
  }
}