import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function WeatherInfo({ currentWeather }) {
  const {
    main: { temp },
    weather: [details],
    name,
  } = currentWeather;

  const { icon, main, description } = details;
  const iconURL = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <View style={styles.WeatherInfo}>
      <Text>{name}</Text>
      <Image style={styles.weatherIcon} source={{ uri: iconURL }} />
      <Text>{temp}</Text>
      <Text style={styles.weatherDescription}>{description}</Text>
      <Text>{main}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  WeatherInfo: {
    alignItems: "center",
  },
  weatherDescription: {
    textTransform: "capitalize",
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
});
