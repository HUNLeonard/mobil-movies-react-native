import { posterResolutions,backdropResolutions } from "@/constants/images";

type ResponseType ={
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[] | TrendingMovie[];
}
type PosterResolution = typeof posterResolutions[number]
type BackdropResolution = typeof backdropResolutions[number]
