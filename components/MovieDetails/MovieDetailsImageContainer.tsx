import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { images } from "@/constants/images";

const MovieDetailsImageContainer = ({
  url,
  movieId,
}: {
  url: string;
  movieId: string;
}) => {
  const router = useRouter();
  const handlePress = () => {
    router.navigate(`https://tmdb.org/movie/${movieId}`);
  }

  return (
    <View>
      <Image source={{ uri: url }} style={styles.image} resizeMode="cover" />
      <TouchableOpacity activeOpacity={0.85} style={styles.playButtonContainer} onPress={handlePress}>
        <Image
          source={images.play}
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default MovieDetailsImageContainer;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
    backgroundColor: "gray",
  },
  playButtonContainer: {
    zIndex: 1,
    position: "absolute",
    top: 464,
    right: 12,
    width: 56,
    height: 56,
    borderRadius: 100,
    backgroundColor: "white",
    padding: 12,
    paddingLeft: 18,
  },
  playButton: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    padding: 12,
    paddingLeft: 18,
    borderRadius: 100,
  },
});
