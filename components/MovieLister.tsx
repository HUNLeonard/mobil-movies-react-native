import { FlatListProps, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import MovieCard from "./MovieCard";

interface MovieListerProps extends Omit<FlatListProps<Movie>, 'data' | 'renderItem' | 'keyExtractor'> {
  movies: Movie[];
  scrollable?: boolean;
}

const MovieLister = ({ movies, scrollable = false , ...props}: MovieListerProps) => {
  return (
      <FlatList
        data={movies}
        renderItem={({ item: movie }) => <MovieCard movie={movie} />}
        keyExtractor={(movie) => movie.id.toString()}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapperStyle}
        scrollEnabled={scrollable}
        {...props}
      />
  );
};

export default MovieLister;

const styles = StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: "center",
    marginBottom: 24,
    gap: 12,
  },
});
