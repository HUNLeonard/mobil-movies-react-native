import { colors } from "@/constants/colors";
import { capitalizer } from "@/libs/utils";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground, Text, TouchableOpacity } from "react-native";

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
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          width: "100%",
          minWidth: 112,
          height: 54,
          marginTop: 12,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 60,
          overflow: "hidden",
        }}
      >
        <ImageBackground
          source={require("@/assets/images/highlight.png")}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
          }}
          resizeMode="cover"
        />
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
      </TouchableOpacity>
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
        marginTop: 12,
        borderRadius: 60,
      }}
    />
  );
}
