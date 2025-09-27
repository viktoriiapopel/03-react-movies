import css from "./MovieGrid.module.css";
import { Movie } from "../../types/movie";

interface MovieGridProps {
    movies: Movie[];
    onMovieClick?: (movie: Movie) => void;
}

export const MovieGrid = ({ movies, onMovieClick }: MovieGridProps) => {
      if (!movies.length) {
    return <p className={css.empty}>No movies found. Try another search.</p>;
  }
   return (
    <ul className={css.grid}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <div  className={css.card}
            role="button"
            tabIndex={0}
            onClick={() => onMovieClick?.(movie)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onMovieClick?.(movie);
              }
            }}>
            {movie.poster_path ? (
              <img
                className={css.image}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                loading="lazy"
              />
            ) : (
              <div className={css.placeholder}>No image</div>
            )}
            <h2 className={css.title}>{movie.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
};













