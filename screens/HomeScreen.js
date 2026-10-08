import { View, Text, StyleSheet, Pressable } from "react-native";
import { colors } from "../constants/Color";
import { useFonts } from "expo-font";
import Logo from "../components/Logo";
import ScreenBackground from "../components/ScreenBackground";


export default function HomeScreen({ navigation }) {

  const [fontsLoaded] = useFonts({
    "Grenze": require("../assets/fonts/Grenze-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <ScreenBackground>
      <View style={styles.container}>
        <Logo />

        <View style={styles.titleGap} />

        <Text style={styles.subtitle}>Comida Con Amor</Text>

        <View style={styles.buttonGap} />

        <Pressable
          onPress={() => navigation.navigate("Menu")}
          style={styles.primaryButton}
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Meny</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton} accessibilityRole="button">
          <Text style={styles.buttonText}>Boka Bord</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("AboutUs")}
          style={styles.thirdButton}
          accessibilityRole="button"
          accessibilityHint="Visar adress och öppettider"
        >
          <Text style={styles.buttonText}>Hitta Hit</Text>
        </Pressable>
      </View>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 24,
    justifyContent: "center",
  },

  title: {
    fontFamily: "Grenze",
    color: colors.darkGreen,
    fontSize: 48,
    fontWeight: "800",
    textAlign: "center",
  },

  subtitle: {
    fontFamily: "Grenze",
    color: colors.turquoise,
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 2,
    marginTop: 8,
  },

  buttonGap: {
    height: 80,
  },

  titleGap: {
    height: 20,
  },

  primaryButton: {
    backgroundColor: colors.pink,
    padding: 18,
    borderRadius: 28,
    marginBottom: 16,
  },

  secondaryButton: {
    backgroundColor: colors.yellow,
    padding: 18,
    borderRadius: 28,
    marginBottom: 16,
  },

  thirdButton: {
    backgroundColor: colors.turquoise,
    padding: 18,
    borderRadius: 28,
  },

  buttonText: {
    color: colors.darkGreen,
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
  },
});
