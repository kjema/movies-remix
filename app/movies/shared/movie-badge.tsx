import type { MovieItem } from "~/backend/types";

export const TMDB_BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

type MovieBadgeProps = {
  movie: MovieItem;
};

function MovieBadge({ movie }: MovieBadgeProps): JSX.Element {
  return (
    <div className="group">
      <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg">
        <img
          className="object-cover duration-200 ease-in-out group-hover:opacity-60"
          src={`${TMDB_BASE_IMAGE_URL}${
            movie.backdrop_path ?? movie.poster_path
          }`}
          alt="movie poster"
        />
      </div>
      <h3 className="mt-4 text-sm text-zinc-500">{movie.release_date}</h3>
      <p className="mt-1 text-base font-medium text-zinc-200">{movie.title}</p>
    </div>
  );
}

export default MovieBadge;
