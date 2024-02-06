import { AntDesign } from "@expo/vector-icons";

import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

function App() {
  return (
    <View style={styles.container}>
      <Text>Wow</Text>
      <Button title="Working On Real Device" onPress={() => alert("Button pressed")} />
      <AntDesign name="forward" size={24} color="black" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
