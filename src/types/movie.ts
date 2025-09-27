


export interface Movie {
    id: number;
    poster_path: string;
    backdrop_path: string;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
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