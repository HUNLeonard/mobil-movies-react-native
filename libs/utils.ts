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


export const timeFormatter = (minutes: number | null) => {
  if (!minutes) return "N/A";
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
};

export const formatDollar = (money: number | null) => {
  if (!money) return "N/A";
  if (money < 1000000) return `$${money}`;
  if (money < 1000000000) return `$${(money / 1000000).toFixed(1)}M`;
  return `$${(money / 1000000000).toFixed(1)}B`;
};

export const getYear = (date:string) => {
  if (!date) return "N/A";
  const convertedDate = new Date(date);
  return convertedDate.getDate();
}