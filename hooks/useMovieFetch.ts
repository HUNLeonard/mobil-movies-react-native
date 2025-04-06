import { fetchMovies } from "@/services/api";
import {useQuery} from "@tanstack/react-query"

interface UseMovieFetchProps {
  trending?: boolean;
  query?: string;
  page?: number;
}

export default function useMovieFetch({trending,query,page}:{trending?: boolean,query?: string,page?: number} = {}) {

  const {data,isPending,error,refetch} = useQuery({
    queryKey: ["movies",trending,query,page],
    queryFn: ()=>fetchMovies(trending,query,page)
  })

  return {movies: data || [] ,isPending,error,refetch};
}