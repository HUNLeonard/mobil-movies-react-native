import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";

interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  onPress?: () => void;
  placeholder?: string;
  focuseIn?: boolean;
}

const SearchBar = ({ value ="", onChange,onPress, placeholder = "", focuseIn = false}: SearchBarProps) => {
  const searchFocus = useRef(focuseIn);
  const textInputRef = useRef<TextInput>(null);

  useFocusEffect(() => {
    if (searchFocus.current && textInputRef.current) {
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
        placeholder={placeholder || "Search for a movie..."}
        value={value}
        onChangeText={onChange}
        style={styles.searchInput}
        placeholderTextColor={colors.light_300}
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
