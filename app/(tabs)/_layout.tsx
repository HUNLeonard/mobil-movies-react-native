import React from "react";
import { Tabs } from "expo-router";
import TabBarItem from "@/components/TabBarItem";
import { colors } from "@/constants/colors";

const _layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarItemStyle: {
                width: "100%",
                height: "100%",
            },
            tabBarStyle: {
                position: "absolute",
                bottom: 24,
                backgroundColor: colors.dark_200,
                borderRadius: 50,
                marginHorizontal: 10,
                height: 52,
                overflow: "hidden",
                borderWidth: 2,
                borderTopWidth: 2,
                borderColor: colors.dark_100,
                paddingHorizontal: 10,
            },
            headerShown: false,
            tabBarShowLabel: false,
        }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabBarItem focused={focused} icon="home" text="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabBarItem focused={focused} icon="search" text="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabBarItem focused={focused} icon="bookmark" text="Saved" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabBarItem focused={focused} icon="person" text="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
