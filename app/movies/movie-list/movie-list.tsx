import type { MovieItem } from "~/backend/types";
import MovieBadge from "../shared/movie-badge";

type MovieListProps = {
  movies: MovieItem[];
};

export default function MovieList({ movies }: MovieListProps) {
  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {movies.map((movie) => (
        <MovieBadge key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
