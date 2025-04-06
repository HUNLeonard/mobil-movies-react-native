import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useMemo } from "react";
import { useRouter } from "expo-router";
import { images } from "@/constants/images";
import SearchBar from "@/components/SearchBar";
import BasicLayout from "@/components/BasicLayout";
import useMovieFetch from "@/hooks/useMovieFetch";
import MovieLister from "@/components/MovieLister";
import Logo from "@/components/Logo";

const Index = () => {
  const {
    movies: popularMovies,
    isPending: popularMoviesIsPending,
    error: popularMoviesError,
    refetch: refetchPopularMovies,
  } = useMovieFetch();
  const {
    movies: trendingMovies,
    isPending: trendingMoviesIsPending,
    error: trendingMoviesError,
    refetch: refetchTrendingMovies,
  } = useMovieFetch({trending:true});
  const router = useRouter();

  useEffect(() => {
    if(!!popularMovies) refetchPopularMovies();
    if(!!trendingMovies) refetchTrendingMovies();
  }, []);

  const renderTrendingMoviesContent = useMemo(
    () =>
      trendingMoviesError ? (
        <Text>Error: {trendingMoviesError.message}</Text>
      ) : trendingMoviesIsPending ? (
        <ActivityIndicator
          size={"large"}
          color={"#0000ff"}
          style={styles.activityIndicator}
        />
      ) : (
        <View>
          <Text style={styles.title}>Trending Movies</Text>
          <MovieLister
            movies={trendingMovies.splice(0, 3) as Movie[]}
            style={{ marginBottom: -24}}
          />
        </View>
      ),

    [trendingMovies, trendingMoviesIsPending, trendingMoviesError]
  );

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
          />
          </View>
        </View>
      ),

    [popularMovies, popularMoviesIsPending, popularMoviesError]
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
