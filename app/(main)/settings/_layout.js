import { FontAwesome } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import { router, useNavigation, usePathname } from "expo-router";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
const DrawerContent = (props) => {
  const pathname = usePathname();
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.userInfoWrapper}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/21.jpg" }}
          width={60}
          height={60}
          style={styles.userImg}
        />
        <View style={styles.userDetailsWrapper}>
          <Text style={styles.userName}>Jane Doe</Text>
          <Text style={styles.userEmail}>jane@gmail.com</Text>
        </View>
      </View>
      <DrawerItem
        icon={({ color, size }) => <FontAwesome name="cog" size={size} color={pathname == "/" ? "#fff" : "#000"} />}
        label={"Settings"}
        labelStyle={[styles.navItemLabel, { color: pathname == "/" ? "#fff" : "#000" }]}
        style={[styles.navItem, { backgroundColor: pathname == "/" ? "#333" : "#fff" }]}
        onPress={() => {
          router.push("/(main)/settings");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <FontAwesome name="phone" size={size} color={pathname == "/contact" ? "#fff" : "#000"} />
        )}
        label={"Contact"}
        labelStyle={[styles.navItemLabel, { color: pathname == "/contact" ? "#fff" : "#000" }]}
        style={[styles.navItem, { backgroundColor: pathname == "/contact" ? "#333" : "#fff" }]}
        onPress={() => {
          router.push("/(main)/settings/contact");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <FontAwesome name="comment" size={size} color={pathname == "/support" ? "#fff" : "#000"} />
        )}
        label={"Support"}
        labelStyle={[styles.navItemLabel, { color: pathname == "/support" ? "#fff" : "#000" }]}
        style={[styles.navItem, { backgroundColor: pathname == "/support" ? "#333" : "#fff" }]}
        onPress={() => {
          router.push("/(main)/settings/support");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <FontAwesome name="info-circle" size={size} color={pathname == "/support" ? "#fff" : "#000"} />
        )}
        label={"About"}
        labelStyle={[styles.navItemLabel, { color: pathname == "/support" ? "#fff" : "#000" }]}
        style={[styles.navItem, { backgroundColor: pathname == "/support" ? "#333" : "#fff" }]}
        onPress={() => {
          navigation.dispatch(DrawerActions.closeDrawer());
          router.push("/about");
        }}
      />
    </DrawerContentScrollView>
  );
};

const _layout = () => {
  return (
    <Drawer drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="index"
        options={{
          title: "Settings",
        }}
      />
      <Drawer.Screen
        name="contact"
        options={{
          title: "Contact",
        }}
      />
      <Drawer.Screen
        name="support"
        options={{
          title: "Support",
        }}
      />
    </Drawer>
  );
};

export default _layout;

const styles = StyleSheet.create({
  navItem: {
    paddingHorizontal: 6,
  },
  navItemLabel: {
    marginLeft: -20,
    fontSize: 18,
  },
  userInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  userImg: {
    borderRadius: 40,
  },
  userDetailsWrapper: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 16,
  },
});
