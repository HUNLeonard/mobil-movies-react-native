import { colors } from "@/constants/colors";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient,QueryClientProvider  } from "@tanstack/react-query";

export default function RootLayout() {

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider  client={client}>
      <GestureHandlerRootView>
        <StatusBar backgroundColor={colors.primary} />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.secondary,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
        </Stack>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
