import { View, Text, StyleSheet } from "react-native";
import { meals } from "../data/Data";
import { colors } from "../constants/Color";

export default function DishDescription({ route }) {
  const { mealId } = route.params;
  const meal = meals.find((m) => m.id === mealId);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{meal?.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  text: {
    fontSize: 24,
    color: colors.darkGreen,
    textAlign: "center",
    marginTop: 40,
  },
});
