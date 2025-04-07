import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback } from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
import { useRouter } from "expo-router";

const GoBackButton = () => {
  const router = useRouter();
  const handleGoBack = useCallback(() => {
    router.back();
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={handleGoBack}
    >
      <Ionicons name="arrow-back" size={24} color="white" />
      <Text
        style={styles.text}
      >
        Go Back
      </Text>
    </TouchableOpacity>
  );
};

export default GoBackButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.accent,
    borderRadius: 4,
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 12,
  },
});
