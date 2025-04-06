import { TMDB_CONFIG } from "@/constants/fetchConfig";
import {
  MOVIE_POSTER_URL,
  MOVIE_BASE_URL,
} from "@/constants/url";
import { PosterResolution, ResponseType } from "@/types/fetchresponse";


export const fetchMovies = async (query?: string, page: number = 1)=> {
  try {
    const endpoint = query
      ? `${MOVIE_BASE_URL}/search/movie?page=${page}&query=${encodeURIComponent(query)}}`
      : `${MOVIE_BASE_URL}/discover/movie?page=${page}&sort_by=popularity.desc`;

    const response = await fetch(endpoint, TMDB_CONFIG);
    if (!response.ok) {
      // @ts-ignore
      throw new Error("Network response was not ok", response.statusText);
    }

    const data: ResponseType = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error while fetching: ", error);
    return [];
  }
};

export const getPoster = async (
  poster_path: string,
  poster_resolution: PosterResolution
) => {
  try {
    const response = await fetch(
      `${MOVIE_POSTER_URL}/${poster_resolution}/${poster_path}`,
      TMDB_CONFIG
    );
    const data: ResponseType = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error while fetching: ", error);
    return [];
  }
};
