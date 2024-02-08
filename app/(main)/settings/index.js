import { Link } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Link href="/" asChild>
        <Button title="Home" />
      </Link>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
