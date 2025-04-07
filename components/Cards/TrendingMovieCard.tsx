import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { movie_poster_url } from "@/libs/utils";
import { colors } from "@/constants/colors";
import { useRouter } from "expo-router";
import { get_genre_name } from "@/libs/utils";
import MaskedView from "@react-native-masked-view/masked-view";
import { images } from "@/constants/images";

interface TrendingMovieCardProps {
  movie: Movie;
  index: number;
}

const TrendingMovieCard = ({
  movie: { poster_path, id, title, genre_ids, vote_average }, index
}: TrendingMovieCardProps) => {
  const router = useRouter();
  const poster_url = poster_path ? movie_poster_url("w154", poster_path) : "";

  const genre_name = get_genre_name(genre_ids[0]);

  const movieRating = (vote_average / 2).toFixed(1);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        router.push(`/movies/${id}`);
      }}
      style={styles.container}
    >
      <View style={styles.starContainer} >
        <Image source={images.star} style={{ width: 16, height: 16 }} />
        <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>
          {movieRating}
        </Text>
      </View>
      <Image
        source={{ uri: poster_url }}
        style={{
          width: 116,
          height: 192,
          borderRadius: 4,
          backgroundColor: "gray",
        }}
        resizeMode="cover"
      />
      <View
        style={styles.numberContainer}
      >
        <MaskedView maskElement={<Text style={styles.number}>{index + 1}</Text>}>
          <Image source={images.rankingGradient} style={{width: 84, height: 84}} resizeMode="cover"/>
        </MaskedView>
        
      </View>
      <Text style={styles.cardTitle} numberOfLines={1}>
        {title}
      </Text>
      <View style={styles.cardFooter}>
        <Text style={styles.movieType}>{genre_name}</Text>
        <Text style={styles.cardType}>Movie</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TrendingMovieCard;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    maxWidth: 116,
    borderRadius: 4,
    backgroundColor: colors.dark_200,
  },
  starContainer: {
    position: "absolute",
    top: 6,
    right: 6,
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 4,
    backdropFilter: "",
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    gap: 4,
    zIndex: 1,
  },
  numberContainer: {
    position: "absolute",
    bottom: 40,
    left: -16,
  },
  number: {
    fontSize: 64,
    fontWeight: "900",
    color: "white"
  },

  cardTitle: {
    textAlign: "center",
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  cardFooter: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  movieType: {
    fontSize: 12,
    color: colors.light_300,
    fontWeight: "bold",
  },
  cardType: {
    fontSize: 12,
    color: colors.light_300,
    fontWeight: "bold",
  },
});
