import { View, Text, StyleSheet, ScrollView, Pressable, Image } from "react-native";
import { useContext } from "react";
import { MealCalculatorContext } from "../context/MealCalculatorContext";
import { colors } from "../constants/Color";
import { spacing } from "../constants/Spacing";
import { getMealImage } from "../data/MealImages";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import BackButton from "../components/buttons/BackButton";

export default function MealScreen() {

  const insets = useSafeAreaInsets();
  const { selectedDishes, increaseQuantity, decreaseQuantity, clearMeal } = useContext(MealCalculatorContext);



  const total = selectedDishes.reduce(
    (sum, dish) => sum + dish.price * dish.quantity,
    0
  );

  return (

    <SafeAreaView style={styles.container}>



      <BackButton
        style={[styles.backButton, { top: insets.top + spacing.screenTop }]}
      />

      <Text style={styles.title} accessibilityRole="header">
        Min måltid
      </Text>

      <ScrollView contentContainerStyle={styles.list}>


        {selectedDishes.map((dish) => (
          <View key={dish.id} style={styles.dish}>

            <Image
              source={getMealImage(dish.id, "thumb")}
              style={styles.image}
            />

            <View
              style={styles.dishInfo}
              accessible
              accessibilityLabel={`${dish.name}, ${dish.quantity} st, ${dish.price * dish.quantity} kronor`}>
              <Text style={styles.name}>{dish.name}</Text>

              <Text style={styles.price}>
                {dish.price * dish.quantity} kr
              </Text>
            </View>

            <View style={styles.quantityControls}>
              <Pressable
                style={styles.quantityButton}
                onPress={() => decreaseQuantity(dish.id)}
                hitSlop={8}
                accessibilityRole="button"
                accessibilityLabel={`Minska antal ${dish.name}`}
              >
                <Text style={styles.quantityButtonText}>−</Text>
              </Pressable>

              <Text
                style={styles.quantity}
                accessibilityLabel={`Antal: ${dish.quantity}`}
                accessibilityLiveRegion="polite">
                {dish.quantity}
              </Text>

              <Pressable
                style={styles.quantityButton}
                onPress={() => increaseQuantity(dish.id)}
                hitSlop={8}
                accessibilityRole="button"
                accessibilityLabel={`Öka antal ${dish.name}`}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </Pressable>
            </View>

          </View>

        ))}

        <Pressable
          style={styles.clearButton}
          onPress={clearMeal}
        >
          <Text style={styles.clearButtonText}>
            Töm måltid
          </Text>
        </Pressable>
      </ScrollView>

      <View
        style={styles.totalContainer}
        accessible
        accessibilityLabel={`Totalt ${total} kronor`}
        accessibilityLiveRegion="polite">
        <Text style={styles.totalLabel}>Totalt</Text>
        <Text style={styles.total}>{total} kr</Text>
      </View>
    </SafeAreaView>

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
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 12,
  },
  clearButton: {
    marginHorizontal: spacing.screenHorizontal,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.pink,
    alignItems: "center",
  },

  clearButtonText: {
    color: colors.pink,
    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    position: "absolute",
    left: spacing.screenHorizontal,
    zIndex: 10,
  },
});