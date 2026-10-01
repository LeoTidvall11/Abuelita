import { View, Text, StyleSheet, Pressable } from "react-native";
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Abuelita</Text>

      <Pressable>
        <Text onPress={() => navigation.navigate("Menu")} style={styles.text}>
          {" "}
          Meny{" "}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  text: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginTop: 40,
  },
});
