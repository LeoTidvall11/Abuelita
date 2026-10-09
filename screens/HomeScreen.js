import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Alert,
  Linking,
} from "react-native";
import { colors } from "../constants/Color";
import ScreenBackground from "../components/ScreenBackground";
import { contactInfo } from "../data/Data";

export default function HomeScreen({ navigation }) {
  function bookTable() {
    const email = contactInfo.email;
    const subject = encodeURIComponent("Bordsbokning");
    const body = encodeURIComponent(
      "Hej! Jag vill boka bord.\n\nDatum:\nTid:\nAntal personer:\nNamn:\nTelefon:",
    );
    const url = `mailto:${email}?subject=${subject}&body=${body}`;
    Alert.alert("Boka ett bord", "Vill du öppna mejlappen för att boka bord?", [
      { text: "Avbryt", style: "cancel" },
      { text: "Öppna mejlappen", onPress: () => Linking.openURL(url) },
    ]);
  }

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
          accessibilityRole="button">
          <Text style={styles.lightButtonText}>Meny</Text>
        </Pressable>

        <Pressable
          onPress={bookTable}
          style={styles.secondaryButton}
          accessibilityRole="button"
          accessibilityHint="Öppnar ett mejl för att boka bord">
          <Text style={styles.lightButtonText}>Boka Bord</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("AboutUs")}
          style={styles.thirdButton}
          accessibilityRole="button"
          accessibilityHint="Visar adress och öppettider">
          <Text style={styles.lightButtonText}>Hitta Hit</Text>
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
    backgroundColor: colors.orange,
    padding: 18,
    borderRadius: 28,
    marginBottom: 16,
  },

  thirdButton: {
    backgroundColor: colors.turquoise,
    padding: 18,
    borderRadius: 28,
  },

  lightButtonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
});
