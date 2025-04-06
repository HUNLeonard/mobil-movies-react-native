import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { images } from "@/constants/images";
import { colors } from "@/constants/colors";

const BasicLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <View style={styles.container}>
      <Image source={images.bg} style={styles.bg} />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {children}
      </ScrollView>
    </View>
  );
};

export default BasicLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    position: 'absolute',
    top:0,
    width: '100%',
    zIndex: 0
  },
  scrollView: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 2.5*8,
  },
  scrollViewContent: {
    minHeight: "100%",
    paddingBottom: 10,
  },
})
