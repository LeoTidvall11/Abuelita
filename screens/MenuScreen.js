
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { meals } from "../data/Data";
import MenuCards from "../components/MenuCards";
import { colors } from "../constants/Color";
import { SafeAreaView } from "react-native-safe-area-context";
import { spacing } from "../constants/Spacing";
import { useContext } from "react";
import { MealCalculatorContext } from "../context/MealCalculatorContext";
import BackButton, { BACK_BUTTON_SIZE } from "../components/buttons/BackButton";

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
        <Text style={styles.text}>Meny</Text>
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
        ListFooterComponent={
          <>
            {selectedDishes.map((dish) => (
              <Text key={dish.id}>
                {dish.name} x {dish.quantity} - {dish.price * dish.quantity} kr
              </Text>
            ))}

            <Text>Totalt: {total} kr</Text>
          </>
        }
      />

      <Pressable
        style={styles.mealBar}
        onPress={() => navigation.navigate("Meal")}
      >
        <Text style={styles.mealBarText}>
          Min måltid · {selectedDishes.length} rätter · {total} kr
        </Text>
      </Pressable>

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
    padding: 16,
    alignItems: "center",
  },

  mealBarText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
