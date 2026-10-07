import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { colors } from "../constants/Color";
import ScreenBackground from "../components/ScreenBackground";

export default function HomeScreen({ navigation }) {

  return (
    <ScreenBackground>
      <View style={styles.container}>

        <Image
          source={require("../assets/images/abuelita_logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.buttonGap} />

        <Pressable
          onPress={() => navigation.navigate("Menu")}
          style={styles.primaryButton}
        >
          <Text style={styles.buttonText}>Meny</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton}>
          <Text style={styles.buttonText}>Boka Bord</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("AboutUs")}
          style={styles.thirdButton}
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

  logo: {
    width: "100%",
    height: 300,
  },

  buttonGap: {
    height: 40,
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