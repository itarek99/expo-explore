import { Link } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Link href="profile/edit" asChild>
        <Button title="Edit Profile" />
      </Link>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
