import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { movie_poster_url } from "@/libs/utils";
import { colors } from "@/constants/colors";
import { useRouter } from "expo-router";
import { images } from "@/constants/images";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie : {poster_path, id,title,vote_average,release_date} }: MovieCardProps) => {
  const router = useRouter();
  const poster_url = poster_path
    ? movie_poster_url("w154", poster_path)
    : "";

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        router.push(`/movies/${id}`);
      }}
      style={styles.container}
    >
      <Image
        source={{ uri: poster_url }}
        style={{
          width: "100%",
          aspectRatio: 2 / 3,
          borderRadius: 10,
          backgroundColor: "gray",
        }}
        resizeMode="cover"
      />
      <Text style={styles.cardTitle} numberOfLines={2}>
        {title}
      </Text>
      <View style={styles.starContainer}>
        {
          [...Array(Math.round(vote_average/2)).keys()].map((_,idx)=>{
            return <Image key={`Achived star ${id}-${idx}`} source={images.star} style={{width:16,height:16}}/>
          })
        }
        {
          [...Array(5 - Math.round(vote_average/2)).keys()].map((_,idx)=>{
            return <Image key={`Unachived star ${id}-${idx}`} source={images.star} style={{width:16,height:16}} tintColor={colors.light_300}/>
          })
        }
      </View>
      <View style={styles.cardFooter}>
          <Text style={styles.releaseDate}>{release_date.split('-')[0]}</Text>
          <Text style={styles.cardType}>Movie</Text>
        </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    maxWidth: "31%",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: colors.dark_200,
  },
  cardTitle: {
    textAlign: "center",
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  starContainer: {
    flexDirection: "row",
    gap: 4,
    marginHorizontal: "auto",
    paddingBottom: 4,
    marginTop: "auto",
  },
  cardFooter: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  releaseDate: {
    fontSize: 12,
    color: colors.light_300,
    fontWeight: "bold",
  },
  cardType: {
    fontSize: 12,
    color: colors.light_300,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
