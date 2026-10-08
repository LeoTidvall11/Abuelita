import { Text, StyleSheet, FlatList, Pressable } from "react-native";
import { meals } from "../data/Data";
import MenuCards from "../components/MenuCards";
import { colors } from "../constants/Color";
import { SafeAreaView } from "react-native-safe-area-context";
import { spacing } from "../constants/Spacing";
import { useContext } from "react";
import { MealCalculatorContext } from "../context/MealCalculatorContext";
import { Ionicons } from "@expo/vector-icons";

export default function MenuScreen({ navigation, route }) {

  const context = useContext(MealCalculatorContext);



  const { selectedDishes, addDish } = context;



  const categoryId = route.params?.categoryId;
  const filteredMeals = meals.filter((meal) => meal.category === categoryId);

  const total = selectedDishes.reduce(
    (sum, dish) => sum + dish.price * dish.quantity,
    0
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.text} accessibilityRole="header">
          Meny
        </Text>
        <View style={styles.headerSpacer} />
      </View>
      <FlatList
        data={filteredMeals}
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

      <Pressable
        style={styles.mealBar}
        onPress={() => navigation.navigate("Meal")}
        accessibilityRole="button"
        accessibilityLabel={`Min måltid, ${selectedDishes.length} rätter, totalt ${total} kronor`}
        accessibilityHint="Visar din måltid"
      >
        <Text style={styles.mealBarText}>
          Min måltid · {selectedDishes.length} rätter · {total} kr
        </Text>
      </Pressable>

      {selectedDishes.length > 0 && (
        <Pressable
          style={styles.mealBar}
          onPress={() => navigation.navigate("Meal")}
        >
          <Ionicons
            name="restaurant-outline"
            size={24}
            color={colors.white}
          />

          <Text style={styles.mealBarText}>
            Min måltid · {selectedDishes.length} rätter · {total} kr
          </Text>

          <Ionicons
            name="chevron-forward"
            size={22}
            color={colors.white}
          />
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
  text: {
    fontSize: 36,
    fontWeight: "800",
    color: colors.turquoise,
    textAlign: "center",
    marginTop: spacing.screenTop,
    marginBottom: spacing.titleBottom,
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
