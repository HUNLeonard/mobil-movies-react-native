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
  const { movies, isPending, error, refetch } = useMovieFetch();
  const router = useRouter();

  useEffect(() => {
    refetch();
  }, []);
  console.log("Movies: " + movies?.length);

  const renderContent = useMemo(
    () =>
      error ? (
        <Text>Error: {error.message}</Text>
      ) : isPending ? (
        <ActivityIndicator
          size={"large"}
          color={"#0000ff"}
          style={styles.activityIndicator}
        />
      ) : (
        <View style={styles.searchBarContainer}>
          <SearchBar
            onPress={() => {
              router.push("/search");
            }}
          />
          <Text style={styles.title}>Latest Movies</Text>
          <MovieLister movies={movies as Movie[]} contentContainerStyle={{marginBottom: 64}}/>
        </View>
      ),

    [movies, isPending, error]
  );

  return (
    <BasicLayout>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <Logo />
        {renderContent}
      </ScrollView>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    marginTop: 40,
    alignSelf: "center",
  },
  searchBarContainer: {
    flex: 1,
    marginTop: 20,
  },
  trendingContainer: {
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
