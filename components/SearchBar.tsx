import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";

interface SearchBarProps {
  onPress?: () => void;
  placeholder?: string;
  focuseIn?: boolean;
}

const SearchBar = ({onPress, placeholder = "", focuseIn = false}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const textInputRef = useRef<TextInput>(null);

  useFocusEffect(() => {
    if (focuseIn && textInputRef.current) {
      textInputRef.current.focus();
    }
  });

  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={24}
        resizeMode={"contain"}
        color={colors.accent}
      />
      <TextInput
        ref={textInputRef}
        onPress={onPress}
        placeholder={placeholder || "Search"}
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.searchInput}
        placeholderTextColor={colors.accent}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.dark_200,
    borderRadius: 60,
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 4
  },
  searchInput: {
    flex: 1,
    color: "white",
  },
});
