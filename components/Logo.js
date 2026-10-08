import { View, Text, StyleSheet } from "react-native";
import { colors } from "../constants/Color";
import { useFonts } from "expo-font";

export default function Logo() {

  const [fontsLoaded] = useFonts({
    "Grenze": require("../assets/fonts/Grenze-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={styles.logo}
      accessible
      accessibilityRole="header"
      accessibilityLabel="Abuelita">
      <Text style={[styles.letter, styles.a]} maxFontSizeMultiplier={1.2}>A</Text>
      <Text style={[styles.letter, styles.b]} maxFontSizeMultiplier={1.2}>B</Text>
      <Text style={[styles.letter, styles.u]} maxFontSizeMultiplier={1.2}>U</Text>
      <Text style={[styles.letter, styles.e]} maxFontSizeMultiplier={1.2}>E</Text>
      <Text style={[styles.letter, styles.l]} maxFontSizeMultiplier={1.2}>L</Text>
      <Text style={[styles.letter, styles.i]} maxFontSizeMultiplier={1.2}>I</Text>
      <Text style={[styles.letter, styles.t]} maxFontSizeMultiplier={1.2}>T</Text>
      <Text style={[styles.letter, styles.lastA]} maxFontSizeMultiplier={1.2}>A</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontFamily: "Grenze",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  letter: {
    fontFamily: "Grenze",
    color: colors.pink,
    fontSize: 54,
    fontWeight: "800",
  },

  a: {
    transform: [{ translateY: 15 }],
  },

  b: {
    transform: [{ translateY: 4 }],
  },

  u: {
    transform: [{ translateY: -3 }],
  },

  e: {
    transform: [{ translateY: -10 }],
  },

  l: {
    transform: [{ translateY: -10 }],
  },

  i: {
    transform: [{ translateY: -3 }],
  },

  t: {
    transform: [{ translateY: 4 }],
  },

  lastA: {
    transform: [{ translateY: 15 }],
  },
});