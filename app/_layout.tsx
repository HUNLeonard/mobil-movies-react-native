import { colors } from "@/constants/colors";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient,QueryClientProvider  } from "@tanstack/react-query";
import { useEffect } from "react";
import * as NavigationBar from 'expo-navigation-bar';

export default function RootLayout() {

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        retry: 5
      },
    },
  });

  NavigationBar.setVisibilityAsync("hidden");


  return (
    <QueryClientProvider  client={client}>
      <GestureHandlerRootView>
        <StatusBar translucent={true} backgroundColor={'transparent'} /> 
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
