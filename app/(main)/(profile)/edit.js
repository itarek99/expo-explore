import { router } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const EditProfile = () => {
  return (
    <View style={styles.container}>
      <Text>Edit Profile</Text>

      <Button
        onPress={() => {
          router.back();
        }}
        title="Back"
      />
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
