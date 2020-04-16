import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "flash",
    gradient: ["#74ebd5", "#ACB6E5"],
    title: "",
    subtitle: "",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#74ebd5", "#ACB6E5"],
    title: "",
    subtitle: "",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#6D6027", "#D3CBB8"],
    title: "",
    subtitle: "",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#03001e", "#fdeff9"],
    title: "",
    subtitle: "",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#667db6", "#fdeff9"],
    title: "",
    subtitle: "",
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#ADA996", "#fdeff9"],
    title: "",
    subtitle: "",
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#4Da0b0", "#D39D38"],
    title: "",
    subtitle: "",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#e1eec3", "#f05053"],
    title: "",
    subtitle: "",
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#1a2a6c", "#fdbb2d"],
    title: "",
    subtitle: "",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#22c1c3", "#fdbb2d"],
    title: "",
    subtitle: "",
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#ff9966", "#ff5e62"],
    title: "",
    subtitle: "",
  },
  Squall: {
    iconName: "weather-windy-variant",
    gradient: ["#7F00FF", "#E100FF"],
    title: "",
    subtitle: "",
  },
  Tornado: {
    iconName: "weather-windy-variant",
    gradient: ["#396afc", "#2948ff"],
    title: "",
    subtitle: "",
  },
  Clear: {
    iconName: "white-balance-sunny",
    gradient: ["#642B73", "#C6426E"],
    title: "",
    subtitle: "",
  },
  Clouds: {
    iconName: "cloud",
    gradient: ["#CB356B", "#BD3F32"],
    title: "오늘은 구름이 좀 있어요!",
    subtitle: "그래도 선크림은 잊지 마세요!",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content"></StatusBar>
      <View style={styles.half}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          color="white"
          size={90}
        ></MaterialCommunityIcons>
        <Text style={styles.temp}>{temp}</Text>
      </View>
      <View style={{ ...styles.half, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  half: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  title: {
    color: "white",
    fontWeight: "600",
    fontSize: 32,
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontWeight: "300",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Dust",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
  ]).isRequired,
};
