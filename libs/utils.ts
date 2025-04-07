import { genres } from "@/constants/genres";
import { PosterResolution } from "@/types/fetchresponse";

export const capitalizer = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const movie_poster_url = ( poster_resolution: PosterResolution,poster_path: string) => {
  return `https://image.tmdb.org/t/p/${poster_resolution}/${poster_path}`;
};

export const movie_logo_url = ( poster_resolution: PosterResolution,poster_path: string) => {
  return `https://image.tmdb.org/t/p/${poster_resolution}/${poster_path}`;
};

export const get_genre_name = (genre_id: number) => {
  const genre_name = genres.find((genre) => genre.id === genre_id)?.name;
  return genre_name || "N/A";
};
