import { TMDB_CONFIG } from "@/constants/fetchConfig";
import { MOVIE_BASE_URL } from "@/constants/url";
import { ResponseType } from "@/types/fetchresponse";

export const fetchMovies = async (
  trending?: boolean,
  query?: string,
  page: number = 1,
) => {
  try {
    const endpoint = trending
      ? `${MOVIE_BASE_URL}/trending/movie/week`
      : query
        ? `${MOVIE_BASE_URL}/search/movie?page=${page}&query=${encodeURIComponent(query)}`
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