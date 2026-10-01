import { View, Text, StyleSheet, Pressable } from "react-native";
import { colors } from "../constants/Color";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Abuelita</Text>
      <Text style={styles.subtitle}>Comida Con Amor</Text>

      <View style={styles.spacer} />

      <Pressable
        onPress={() => navigation.navigate("Menu")}
        style={styles.primaryButton}
      >
        <Text style={styles.buttonText}>Meny</Text>
      </Pressable>

      <Pressable style={styles.secondaryButton}>
        <Text style={styles.buttonText}>Boka Bord</Text>
      </Pressable>

      <Pressable style={styles.thirdButton}>
        <Text style={styles.buttonText}>Hitta Hit</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
    padding: 24,
    justifyContent: "center",
  },

  title: {
    color: colors.darkGreen,
    fontSize: 48,
    fontWeight: "800",
    textAlign: "center",
  },

  subtitle: {
    color: colors.darkGreen,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 2,
    marginTop: 8,
  },

  spacer: {
    height: 80,
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
