import { FlatListProps, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import MovieCard from "./MovieCard";

interface MovieListerProps extends Omit<FlatListProps<Movie>, 'data' | 'renderItem' | 'keyExtractor'> {
  movies: Movie[];
  scrollable?: boolean;
  renderItem?: JSX.ElementType;
}

const MovieLister = ({ movies, scrollable = false , renderItem: Card = MovieCard,...props}: MovieListerProps) => {
  return (
      <FlatList
        data={movies}
        renderItem={({item:movie, index})=> <Card movie={movie} index={index} />}
        keyExtractor={(movie) => movie.id.toString()}
        scrollEnabled={scrollable}
        {...props?.numColumns && {columnWrapperStyle: styles.columnWrapperStyle}}
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
