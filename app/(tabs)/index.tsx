import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useMemo } from "react";
import { useRouter } from "expo-router";
import SearchBar from "@/components/SearchBar";
import BasicLayout from "@/components/BasicLayout";
import useMovieFetch from "@/hooks/useMovieFetch";
import MovieLister from "@/components/MovieLister";
import Logo from "@/components/Logo";
import TrendingMovieCard from "@/components/Cards/TrendingMovieCard";

const Index = () => {
  const {
    data: popularMovies,
    isPending: popularMoviesIsPending,
    error: popularMoviesError,
    refetch: refetchPopularMovies,
  } = useMovieFetch();
  const {
    data: trendingMovies,
    isPending: trendingMoviesIsPending,
    error: trendingMoviesError,
    refetch: refetchTrendingMovies,
  } = useMovieFetch<Movie[]>({ trending: true });
  const router = useRouter();

  useEffect(() => {
    if (!!popularMovies) refetchPopularMovies();
    if (!!trendingMovies) refetchTrendingMovies();
  }, []);

  const renderTrendingMoviesContent = useMemo(() => {
    return (
      <>
        <Text style={styles.title}>Trending Movies</Text>
        {trendingMoviesError ? (
          <Text>Error: {trendingMoviesError.message}</Text>
        ) : trendingMoviesIsPending ? (
          <ActivityIndicator
            size={"large"}
            color={"#0000ff"}
            style={styles.activityIndicator}
          />
        ) : (
          <MovieLister
            movies={trendingMovies.splice(0, 5) as Movie[]}
            renderItem={TrendingMovieCard}
            contentContainerStyle={{ paddingLeft: 12, gap: 32 }}
            horizontal
            scrollEnabled
          />
        )}
      </>
    );
  }, [trendingMovies, trendingMoviesIsPending, trendingMoviesError]);

  const renderMovies = useMemo(
    () =>
      popularMoviesError ? (
        <Text>Error: {popularMoviesError.message}</Text>
      ) : popularMoviesIsPending ? (
        <ActivityIndicator
          size={"large"}
          color={"#0000ff"}
          style={styles.activityIndicator}
        />
      ) : (
        <View style={styles.contentContainer}>
          <SearchBar
            onPress={() => {
              router.push("/search");
            }}
          />
          {renderTrendingMoviesContent}
          <View>
            <Text style={styles.title}>Popular Movies</Text>
            <MovieLister
              movies={popularMovies as Movie[]}
              contentContainerStyle={{ marginBottom: 64 }}
              numColumns={3}
            />
          </View>
        </View>
      ),

    [trendingMovies,popularMovies, popularMoviesIsPending, popularMoviesError]
  );

  return (
    <BasicLayout>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <Logo />
        {renderMovies}
      </ScrollView>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    marginTop: 40,
    alignSelf: "center",
  },
  contentContainer: {
    flex: 1,
    marginTop: 20,
  },
  scrollView: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
  },
  scrollViewContent: {
    minHeight: "100%",
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginVertical: 24,
  },
});

export default Index;
