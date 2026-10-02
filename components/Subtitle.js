import { View, Text, StyleSheet } from "react-native";
import { colors } from "../constants/Color";
import { useFonts } from "expo-font";

export default function Subtitle() {

  const [fontsLoaded] = useFonts({
    "Risque": require("../assets/fonts/Risque-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.Subtitle}>
      <Text style={[styles.letter, styles.pos1]}>C</Text>
      <Text style={[styles.letter, styles.pos2]}>o</Text>
      <Text style={[styles.letter, styles.pos3]}>m</Text>
      <Text style={[styles.letter, styles.pos4]}>i</Text>
      <Text style={[styles.letter, styles.pos5]}>d</Text>
      <Text style={[styles.letter, styles.pos6]}>a</Text>

      <Text style={styles.letter}>  </Text>

      <Text style={[styles.letter, styles.pos7]}>c</Text>
      <Text style={[styles.letter, styles.pos6]}>o</Text>
      <Text style={[styles.letter, styles.pos5]}>n</Text>

      <Text style={styles.letter}>  </Text>

      <Text style={[styles.letter, styles.pos4]}>A</Text>
      <Text style={[styles.letter, styles.pos3]}>m</Text>
      <Text style={[styles.letter, styles.pos2]}>o</Text>
      <Text style={[styles.letter, styles.pos1]}>r</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Subtitle: {
    fontFamily: "Risque",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  letter: {
    fontFamily: "Risque",
    color: colors.turquoise,
    fontSize: 24,
    fontWeight: "800",
  },

  pos1: {
    transform: [{ translateY: -7 }],
  },

  pos2: {
    transform: [{ translateY: -5 }],
  },

  pos3: {
    transform: [{ translateY: 0 }],
  },

  pos4: {
    transform: [{ translateY: 5 }],
  },

  pos5: {
    transform: [{ translateY: 7 }],
  },

  pos6: {
    transform: [{ translateY: 8 }],
  },
  pos7: {
    transform: [{ translateY: 9 }],
  },
});