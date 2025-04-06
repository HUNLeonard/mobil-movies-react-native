import { posterResolutions } from "@/constants/images";

type ResponseType ={
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[] | TrendingMovie[] | MovieDetails[];
}

type PosterResolution = typeof posterResolutions[number]