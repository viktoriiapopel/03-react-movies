import css from "./MovieGrid.module.css";
import type { Movie } from "../../types/movie";

interface MovieGridProps {
    movies: Movie[];
    onSelect: (movie: Movie) => void;
}

export default function MovieGrid({ movies, onSelect }: MovieGridProps)  {
   return (
    <ul className={css.grid}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <div  className={css.card}
            role="button"
            tabIndex={0}
            onClick={() => onSelect(movie)}>
            
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













