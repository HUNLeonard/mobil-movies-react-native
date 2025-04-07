import { colors } from "@/constants/colors";
import { FlatList, Text } from "react-native";

interface MovieDetailsHorizontalListerProps {
  data: string[];
}

export default function MovieDetailsHorizontalLister({data}:MovieDetailsHorizontalListerProps) {
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <>
          <Text
            style={{
              color: colors.light_300,
            }}
          >
            {String(item)}
          </Text>
          {index !== data.length - 1 && (
            <Text
              style={{
                color: colors.light_300,
                marginHorizontal: 12,
              }}
            >
              •
            </Text>
          )}
        </>
      )}
      keyExtractor={(item) => item}
      horizontal
    />
  );
}