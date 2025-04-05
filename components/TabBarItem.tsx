import { colors } from "@/constants/colors";
import { capitalizer } from "@/libs/utils";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, Pressable, SafeAreaView, Text, TouchableWithoutFeedback, View } from "react-native";

type IconType = keyof typeof Ionicons.glyphMap;

export default function TabBarItem({
  focused,
  icon,
  text,
}: {
  focused: boolean;
  icon: IconType;
  text: string;
}) {
  if (focused) {
    return (
      <ImageBackground
        source={require("@/assets/images/highlight.png")}
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          minWidth: 112,
          height: 56,
          marginTop: 16,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 60,
          overflow: "hidden",
        }}
      >
        <Ionicons name={icon} size={24} color={colors.secondary} />
        <Text
          style={{
            color: colors.secondary,
            fontSize: 16,
            fontWeight: "600",
            marginLeft: 8,
          }}
        >
          {capitalizer(text)}
        </Text>
      </ImageBackground>
    );
  }
  return (

    <Ionicons
      name={`${icon}` as IconType}
      size={24}
      color={colors.light_200}
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
        borderRadius: 60,
      }}
    />
  );
}
