import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import MovieCard from "./MovieCard";

interface LatestMoviesProps {
  movies: Movie[];
}

const LatestMovies = ({ movies }: LatestMoviesProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latest Movies</Text>
      <FlatList
        data={movies}
        renderItem={({ item: movie }) => <MovieCard movie={movie} />}
        keyExtractor={(movie) => movie.id.toString()}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapperStyle}
        scrollEnabled={false}
      />
    </View>
  );
};

export default LatestMovies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 64,
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginVertical: 24,
  },
  columnWrapperStyle: {
    justifyContent: "center",
    marginBottom: 24,
    gap: 12,
  },
});
