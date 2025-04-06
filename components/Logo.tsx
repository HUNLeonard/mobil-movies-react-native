import { Image, StyleSheet } from "react-native";
import React from "react";
import { images } from "@/constants/images";

const Logo = () => {
  return <Image source={images.logo2} style={styles.logo} />;
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    width: 48,
    height: 40,
    resizeMode: "contain",
    marginTop: 40,
    marginBottom: 20,
    marginHorizontal: "auto",
  },
});
