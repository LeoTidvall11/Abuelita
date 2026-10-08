import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { useFavorites } from "../context/FavoritesContext";
import { useContext } from "react";
import { MealCalculatorContext } from "../context/MealCalculatorContext";
import MenuCards from "../components/MenuCards";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../constants/Color";
import { spacing } from "../constants/Spacing";
import BackButton, { BACK_BUTTON_SIZE } from "../components/buttons/BackButton";
import { Ionicons } from "@expo/vector-icons";

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useFavorites();

  const context = useContext(MealCalculatorContext);
  const { selectedDishes, addDish } = context;

  const total = selectedDishes.reduce(
    (sum, dish) => sum + dish.price * dish.quantity,
    0,
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton />

        <Text style={styles.title} accessibilityRole="header">
          Favoriter
        </Text>

        <View style={styles.headerSpacer} />
      </View>

      {favorites.length === 0 && (
        <Text style={styles.emptyText}>Du har inga favoriter ännu</Text>
      )}

      <FlatList
        data={favorites}
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
          accessibilityHint="Visar din måltid"
        >
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
    paddingHorizontal: spacing.screenHorizontal,
    paddingTop: spacing.screenTop,
    paddingBottom: spacing.titleBottom,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "800",
    color: colors.turquoise,
  },
  headerSpacer: {
    width: 40,
  },
  emptyText: {
    textAlign: "center",
    color: colors.darkGreen,
    fontSize: 16,
    marginTop: 40,
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