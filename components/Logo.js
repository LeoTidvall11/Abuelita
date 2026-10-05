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
    <View style={styles.logo}>
      <Text style={[styles.letter, styles.a]}>A</Text>
      <Text style={[styles.letter, styles.b]}>B</Text>
      <Text style={[styles.letter, styles.u]}>U</Text>
      <Text style={[styles.letter, styles.e]}>E</Text>
      <Text style={[styles.letter, styles.l]}>L</Text>
      <Text style={[styles.letter, styles.i]}>I</Text>
      <Text style={[styles.letter, styles.t]}>T</Text>
      <Text style={[styles.letter, styles.lastA]}>A</Text>
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