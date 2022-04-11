import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function WeatherInfo({ currentWeather }) {
  const {
    main: { temp },
  } = currentWeather;

  return (
    <View>
      <Text>{temp}</Text>
    </View>
  );
}
