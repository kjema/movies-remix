import type { DataFunctionArgs } from "@remix-run/node";
import TmdbApi from "~/backend/tmdb-api";
import MovieList from "~/movies/movie-list/movie-list";
import Movies from "~/movies/movies";
import { jsonTyped, useLoaderDataTyped } from "~/remix-typed";

export const loader = async ({ request }: DataFunctionArgs) => {
  const popularMovies = await TmdbApi.movies.getPopular();
  return jsonTyped(popularMovies);
};

export default function Index() {
  const moviesData = useLoaderDataTyped<typeof loader>();
  return (
    <Movies>
      <MovieList movies={moviesData} />
    </Movies>
  );
}
