import { TMDB_API } from "~/constants/server.env";
import type { Movies, TmdbResponse } from "./types";

export type TmdbApi = {
  movies: {
    getPopular: () => Promise<Movies>;
  };
};

const POPULAR_API = `${TMDB_API.URL}/popular`;

function createTmdbApi(): TmdbApi {
  return {
    movies: {
      getPopular: async () => {
        const params = getAuthSearchParams();
        params.set("language", "en-US");

        const request = new Request(`${POPULAR_API}?${params}`);

        const response = await fetch(request, { method: "GET" });
        if (!response.ok) return Promise.reject(response.statusText);
        const data: TmdbResponse = await response.json();
        return data.results;
      },
    },
  };
}

export default createTmdbApi();

function getAuthSearchParams() {
  if (!TMDB_API.API_KEY) {
    throw new Error("Missing TMDB API key");
  }
  const params = new URLSearchParams();
  params.set("api_key", TMDB_API.API_KEY);
  return params;
}
