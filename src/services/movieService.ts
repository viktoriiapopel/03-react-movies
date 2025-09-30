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

export interface TMDBMovie {
adult: boolean;
backdrop_path: string | null;
genre_ids?: number[];
id: number;
original_language?: string;
original_title?: string;
overview?: string | null;
popularity?: number;
poster_path?: string | null;
release_date?: string | null;
title?: string | null;
video?: boolean;
vote_average?: number | null;
vote_count?: number | null;
}

export interface TMDBSearchResponse<T = TMDBMovie> {
page: number;
results: T[];
total_pages: number;
total_results: number;
}

export type AxiosTMDBResponse<T = TMDBMovie> = AxiosResponse<TMDBSearchResponse<T>>;

export interface FetchMoviesParams {
query: string;
page?: number;
includeAdult?: boolean;
year?: number;
language?: string;
signal?: AbortSignal;
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

console.log("TMDB Token:", TMDB_BEARER_TOKEN);