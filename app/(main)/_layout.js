import { FontAwesome } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import React from "react";
import { Pressable } from "react-native";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <FontAwesome name="home" size={size} color={color} />,
          headerRight: () => (
            <Link href="/about" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome name="info-circle" size={25} style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }} />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="new"
        options={{
          title: "New",
          tabBarIcon: ({ color, size }) => <FontAwesome name="plus" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome name="user" size={size} color={color} />,
          title: "Profile",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome name="cog" size={size} color={color} />,
          title: "Settings",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _layout;
