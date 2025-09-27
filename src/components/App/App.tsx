
import React from "react";
import { useState } from "react";
import css from "./App.module.css";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Loader } from "../Loader/Loader";
import { MovieGrid } from "../MovieGrid/MovieGrid";
import { MovieModal } from "../MovieModal/MovieModal";
import { SearchBar } from "../SearchBar/SearchBar";
import { fetchMovies } from "../../services/movieService";
import type { Movie } from "../../types/movie";



export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
    

  // const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);
    

  const handleSubmit = async (formData: FormData) => {
    const moviename = formData.get("moviename") as string;
	  
    if (!moviename.trim()) return;
     try {
      setLoading(true);
      setError(null);
      const data = await fetchMovies(moviename);
      setMovies(data.results); 
    } catch (err) {
      setError("Failed to fetch movies");
    } finally {
      setLoading(false);
    }
  };

  return (
		<div className={css.app}>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
            <MovieGrid movies={movies}/>
            
            <MovieModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}







