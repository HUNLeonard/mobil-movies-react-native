import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useMemo } from "react";
import { useLocalSearchParams } from "expo-router";
import useMovieFetch from "@/hooks/useMovieFetch";
import { colors } from "@/constants/colors";
import { movie_poster_url, timeFormatter,getYear } from "@/libs/utils";
import MovieDetailsImageContainer from "@/components/MovieDetails/MovieDetailsImageContainer";
import MovieDetailsContainer from "@/components/MovieDetails/MovieDetailsContainer";
import GoBackButton from "@/components/GoBackButton";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const {
    data: movie,
    isPending,
    error,
    refetch,
  } = useMovieFetch<MovieDetails>({ id: id as string });

  useEffect(() => {
    if (!!movie) refetch();
  }, []);

  const poster_url = useMemo(() => {
    if (!movie) return "";
    return movie.poster_path
      ? movie_poster_url("original", movie.poster_path)
      : "";
  }, [movie]);

  const renderLoading = useMemo(() => {
    if (!movie) {
      if (error) return <Text>Error: {error.message}</Text>;
      if (isPending)
        return <ActivityIndicator size={"large"} color={colors.accent} />;
    }
  }, [movie, isPending, error]);

  return (
    <View style={{ position: "relative" }}>
      <ScrollView contentContainerStyle={styles.container} scrollEnabled>
        {renderLoading}
        {movie && (
          <>
            {/* Movie Image */}
            <MovieDetailsImageContainer
              url={poster_url}
              movieId={id as string}
            />
            {/* Movie Details */}
            <MovieDetailsContainer movie={movie}/>
          </>
        )}
      </ScrollView>
      <GoBackButton />
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    gap: 20,
    paddingBottom: 128,
  },
});

