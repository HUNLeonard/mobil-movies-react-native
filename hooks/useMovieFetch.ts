import { fetchMovies } from "@/services/api";
import {useQuery} from "@tanstack/react-query"

interface UseMovieFetchProps {
  id?: string;
  trending?: boolean;
  query?: string;
  page?: number;
}

export default function useMovieFetch <T extends Movie[] | TrendingMovie[] | MovieDetails>({id,trending,query,page}:UseMovieFetchProps = {}) {

  const {data,isPending,error,refetch} = useQuery({
    queryKey: ["movies",id,trending,query,page],
    queryFn: ()=>fetchMovies(id,trending,query,page),
    retry: 5
  })

  return {data: data as T ,isPending,error,refetch};
}