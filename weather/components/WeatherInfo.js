import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function WeatherInfo({ currentWeather }) {
  const {
    main: { temp },
    weather: [details],
  } = currentWeather;

  const { icon } = details;
  const iconURL = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <View style={styles.WeatherInfo}>
      <Image style={styles.weatherIcon} source={{ uri: iconURL }} />
      <Text>{temp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  WeatherInfo: {
    alignItems: "center",
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
});
