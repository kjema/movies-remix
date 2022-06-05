export type MovieItem = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TmdbResponse = {
  page: number;
  results: MovieItem[];
  total_pages: number;
  total_results: number;
};

export enum MovieFilter {
  ACTION = 28,
  ADVENTURE = 12,
  ALL = 0,
  ANIMATION = 16,
  COMEDY = 35,
  CRIME = 80,
  DOCUMENTARY = 99,
  DRAMA = 18,
  FAMILY = 10751,
  FANTASY = 14,
  HISTORY = 36,
  HORROR = 27,
  MUSIC = 10402,
  MYSTERY = 9648,
  ROMANCE = 10749,
  SCIENCE_FICTION = 878,
  THRILLER = 53,
  TV_MOVIE = 10770,
  WAR = 10752,
  WESTERN = 37,
}

export type Movies = MovieItem[];
