import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MovieDetailsH2 from "./MovieDetailsH2";
import { formatDollar, getYear, timeFormatter } from "@/libs/utils";
import { colors } from "@/constants/colors";
import MovieDetailsHorizontalLister from "./MovieDetailsHorizontalLister";

const MovieDetailsContainer = ({ movie }: { movie: MovieDetails }) => {
  return (
    
    <View style={styles.contentContainer}>
      {/*  Movie Title */}
      <Text style={styles.title}>{movie.title}</Text>
      {/* Movie Date, Age rating, Runtime */}
      <View style={styles.detailsContainer}>
        <Text style={{ color: colors.light_300 }}>
          {getYear(movie.release_date)}
        </Text>
        <Text style={{ color: colors.light_300 }}>•</Text>
        <Text style={{ color: colors.light_300 }}>
          {movie.adult ? "R" : "PG-13"}
        </Text>
        <Text style={{ color: colors.light_300 }}>•</Text>
        <Text style={{ color: colors.light_300 }}>
          {timeFormatter(movie.runtime)}
        </Text>
      </View>
      {/* Movie Rating */}
      <View style={styles.detailsContainer}>
        <Text style={styles.bubbleWrapper}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {movie.vote_average.toFixed(1)}
          </Text>
          /10 ({movie.vote_count})
        </Text>
      </View>
      {/* Movie Overview */}
      <View style={{ flex: 1, gap: 12 }}>
        <MovieDetailsH2 text="Overview" />
        <Text style={{ color: colors.light_300 }}>{movie.overview}</Text>
      </View>
      {/* Movie Genres */}
      <View style={{ flex: 1, gap: 12 }}>
        <MovieDetailsH2 text="Genres" />
        <MovieDetailsHorizontalLister
          data={movie.genres.map((genre) => genre.name)}
        />
      </View>
      {/* Movie Budget and Revenue */}
      <View style={styles.moneyContainer}>
        <View style={{ flex: 1, gap: 12 }}>
          <MovieDetailsH2 text="Budget" />
          <Text style={{ color: colors.light_300 }}>
            {formatDollar(movie.budget)}
          </Text>
        </View>
        <View style={{ flex: 1, gap: 12 }}>
          <MovieDetailsH2 text="Revenue" />
          <Text style={{ color: colors.light_300 }}>
            {formatDollar(movie.revenue)}
          </Text>
        </View>
      </View>
      {/* Movie Production Companies */}
      <View style={{ flex: 1, gap: 12 }}>
        <MovieDetailsH2 text="Production Companies" />
        <MovieDetailsHorizontalLister
          data={movie.production_companies.map((company) => company.name)}
        />
      </View>
    </View>
  );
};

export default MovieDetailsContainer;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    gap: 15,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  detailsContainer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  bubbleWrapper: {
    color: colors.light_300,
    backgroundColor: colors.dark_100,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  moneyContainer: {
    flex: 1,
    gap: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
