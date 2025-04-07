import { colors } from "@/constants/colors";
import { Text } from "react-native";

export default function MovieDetailsH2({ text }: { text: string }) {
  return (
    <Text style={{ color: colors.light_300, fontWeight: "bold", fontSize: 16 }}>
      {text}
    </Text>
  );
}
