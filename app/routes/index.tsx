import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { MovieItem } from "~/backend/types";
import MovieList from "~/movies/movie-list/movie-list";
import Movies from "~/movies/movies";
import TmdbApi from "~/backend/tmdb-api";

export const loader: LoaderFunction = async ({ request }) => {
  const popularMovies = await TmdbApi.movies.getPopular();

  return json(popularMovies);
};

export default function Index() {
  const moviesData = useLoaderData<MovieItem[]>();
  return (
    <Movies>
      <MovieList movies={moviesData} />
    </Movies>
  );
}
