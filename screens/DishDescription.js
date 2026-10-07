import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { meals } from "../data/Data";
import { getMealImage } from "../data/MealImages";
import { colors } from "../constants/Color";
import { spacing } from "../constants/Spacing";
import { useContext } from "react";
import { MealCalculatorContext } from "../context/MealCalculatorContext";
import FoodTags from "../components/labels/FoodTags.js";
import BackButton from "../components/buttons/BackButton";
import { Ionicons } from "@expo/vector-icons";

export default function DishDescription({ navigation, route }) {
  const { mealId } = route.params;
  const meal = meals.find((m) => m.id === mealId);
  const { selectedDishes, addDish } = useContext(MealCalculatorContext);
  const total = selectedDishes.reduce(
    (sum, dish) => sum + dish.price * dish.quantity,
    0
  );
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={getMealImage(meal.id, "detail")}
          style={{ width, height: (width * 2) / 3 }}
          resizeMode="cover"
        />

        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text style={styles.text}>{meal.name}</Text>
            <Text style={styles.price}>{meal.price} kr</Text>
          </View>

          <FoodTags meal={meal} />

          <Text style={styles.description}>{meal.description}</Text>

          <Pressable
            style={({ pressed }) => [
              styles.addButton,
              pressed && styles.addButtonPressed,
            ]}
            onPress={() => addDish(meal)}
          >
            <Text style={styles.addButtonText}>
              Lägg till i måltid
            </Text>
          </Pressable>

          <Text style={styles.allergens}>
            Allergener:{" "}
            {meal.allergens.length > 0 ? meal.allergens.join(", ") : "Inga"}
          </Text>
        </View>
      </ScrollView>
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
      <BackButton
        style={[styles.backButton, { top: insets.top + spacing.screenTop }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  backButton: {
    position: "absolute",
    left: spacing.screenHorizontal,
  },
  content: {
    paddingHorizontal: spacing.screenHorizontal,
    paddingVertical: spacing.screenTop,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    flex: 1,
    fontSize: 24,
    color: colors.darkGreen,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.pink,
    marginLeft: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.darkGreen,
    marginTop: 16,
  },
  allergens: {
    fontSize: 14,
    color: colors.darkGreen,
    opacity: 0.7,
    marginTop: 16,
  },
  scrollContent: {
    paddingTop: spacing.screenTop,
  },
  addButton: {
    backgroundColor: colors.turquoise,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 24,
  },
  addButtonPressed: {
    opacity: 0.6,
  },

  addButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
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
    flex: 1,
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 8,
  },
});
