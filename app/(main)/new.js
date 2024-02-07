import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NewPost = () => {
  return (
    <View style={styles.container}>
      <Text>New Post</Text>
    </View>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
