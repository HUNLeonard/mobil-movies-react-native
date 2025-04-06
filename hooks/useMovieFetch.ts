import { fetchMovies } from "@/services/api";
import {useQuery} from "@tanstack/react-query"


export default function useMovieFetch(query?: string,page?: number) {

  const {data,isPending,error,refetch} = useQuery({
    queryKey: ["movies",query,page],
    queryFn: ()=>fetchMovies(query,page)
  })

  return {movies: data || [] ,isPending,error,refetch};
}