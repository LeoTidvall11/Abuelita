import { View, Text, StyleSheet } from "react-native";

export default function DishDescription() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dish</Text>
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
