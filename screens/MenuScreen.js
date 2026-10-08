import { Text, StyleSheet, FlatList, Pressable, View } from "react-native";
import { categories, meals } from "../data/Data";
import MenuCards from "../components/MenuCards";
import { colors } from "../constants/Color";
import { SafeAreaView } from "react-native-safe-area-context";
import { spacing } from "../constants/Spacing";
import { useContext } from "react";
import { MealCalculatorContext } from "../context/MealCalculatorContext";
import { Ionicons } from "@expo/vector-icons";
import BackButton, { BACK_BUTTON_SIZE } from "../components/buttons/BackButton";

export default function MenuScreen({ navigation, route }) {
  const context = useContext(MealCalculatorContext);

  const { selectedDishes, addDish } = context;

  const categoryId = route.params?.categoryId;
  const category = categories.find((c) => c.id === categoryId);
  const filteredMeals = meals.filter((meal) => meal.category === categoryId);

  const total = selectedDishes.reduce(
    (sum, dish) => sum + dish.price * dish.quantity,
    0,
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.text} accessibilityRole="header">
          {category?.title ?? "Meny"}
        </Text>
        <View style={styles.headerSpacer} />
      </View>
      <FlatList
        data={filteredMeals}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <MenuCards
            item={item}
            onPress={() =>
              navigation.navigate("Dish", {
                mealId: item.id,
              })
            }
            onAdd={() => addDish(item)}
          />
        )}
      />

      {selectedDishes.length > 0 && (
        <Pressable
          style={styles.mealBar}
          onPress={() => navigation.navigate("Meal")}
          accessibilityRole="button"
          accessibilityLabel={`Min måltid, ${selectedDishes.length} rätter, totalt ${total} kronor`}
          accessibilityHint="Visar din måltid">
          <Ionicons name="restaurant-outline" size={24} color={colors.white} />

          <Text style={styles.mealBarText}>
            Min måltid · {selectedDishes.length} rätter · {total} kr
          </Text>

          <Ionicons name="chevron-forward" size={22} color={colors.white} />
        </Pressable>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.screenHorizontal,
    marginTop: spacing.screenTop,
    marginBottom: spacing.titleBottom,
  },
  headerSpacer: {
    width: BACK_BUTTON_SIZE,
  },
  text: {
    flex: 1,
    fontSize: 36,
    fontWeight: "800",
    color: colors.turquoise,
    textAlign: "center",
  },
  mealBar: {
    backgroundColor: colors.turquoise,
    marginHorizontal: spacing.screenHorizontal,
    marginBottom: 10,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  mealBarText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    marginHorizontal: 8,
  },
});
