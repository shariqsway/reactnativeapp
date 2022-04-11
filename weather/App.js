import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";

export default function App() {
  const { errorMessage, setErrorMessage } = useState(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status != "granted") {
        setErrorMessage("Cannot Access the location");
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;
      alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
    } catch (error) {}
  }

  return (
    <View style={styles.container}>
      <Text>Hello from React Native</Text>
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
