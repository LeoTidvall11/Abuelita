import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useContext } from "react";
import { MealCalculatorContext } from "../context/MealCalculatorContext";
import { colors } from "../constants/Color";
import { spacing } from "../constants/Spacing";

export default function MealScreen() {
  const { selectedDishes, increaseQuantity, decreaseQuantity } = useContext(MealCalculatorContext);

  const total = selectedDishes.reduce(
    (sum, dish) => sum + dish.price * dish.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Min måltid</Text>

      <ScrollView contentContainerStyle={styles.list}>
        {selectedDishes.map((dish) => (
          <View key={dish.id} style={styles.dish}>

            <View style={styles.dishInfo}>
              <Text style={styles.name}>{dish.name}</Text>

              <Text style={styles.price}>
                {dish.price * dish.quantity} kr
              </Text>
            </View>

            <View style={styles.quantityControls}>
              <Pressable
                style={styles.quantityButton}
                onPress={() => decreaseQuantity(dish.id)}
              >
                <Text style={styles.quantityButtonText}>−</Text>
              </Pressable>

              <Text style={styles.quantity}>
                {dish.quantity}
              </Text>

              <Pressable
                style={styles.quantityButton}
                onPress={() => increaseQuantity(dish.id)}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </Pressable>
            </View>

          </View>
        ))}
      </ScrollView>

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Totalt</Text>
        <Text style={styles.total}>{total} kr</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    color: colors.turquoise,
    textAlign: "center",
    marginTop: spacing.screenTop,
    marginBottom: spacing.titleBottom,
  },

  list: {
    paddingHorizontal: spacing.screenHorizontal,
  },

  dish: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 16,
    marginBottom: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.yellow,
  },

  dishInfo: {
    flex: 1,
  },

  name: {
    fontSize: 17,
    color: colors.darkGreen,
    fontWeight: "600",
  },

  quantity: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.darkGreen,
    marginHorizontal: 12,
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.pink,
    marginLeft: 12,
  },

  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.darkGreen,
    paddingHorizontal: spacing.screenHorizontal,
    paddingVertical: 18,
  },

  totalLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.darkGreen,
  },

  total: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.pink,
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
  },

  quantityButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.turquoise,
    alignItems: "center",
    justifyContent: "center",
  },

  quantityButtonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});