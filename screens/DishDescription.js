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
import PriceBadge from "../components/labels/PriceBadge.js";
import BackButton from "../components/buttons/BackButton";
import { useFavorites } from "../context/FavoritesContext";
import { Ionicons } from "@expo/vector-icons";

const CARD_OVERLAP = 30;

export default function DishDescription({ route, navigation }) {
  const { mealId } = route.params;
  const meal = meals.find((m) => m.id === mealId);
  const { selectedDishes, addDish } = useContext(MealCalculatorContext);
  const total = selectedDishes.reduce(
    (sum, dish) => sum + dish.price * dish.quantity,
    0,
  );
  const totalQuantity = selectedDishes.reduce(
    (sum, dish) => sum + dish.quantity,
    0
  );
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.some((favorite) => favorite.id === meal.id);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={getMealImage(meal.id, "detail")}
          style={{ width, height: width * 0.75 + insets.top }}
          resizeMode="cover"
          accessibilityRole="image"
          accessibilityLabel={`Bild på ${meal.name}`}
        />

        <View style={styles.card}>
          <Pressable
            style={styles.favoriteButton}
            onPress={() => toggleFavorite(meal)}
          >
            <Ionicons
              name={isFavorite ? "heart" : "heart-outline"}
              size={28}
              color={colors.pink}
            />
          </Pressable>

          <View style={styles.titleWrapper}>
            <Text style={styles.title} accessibilityRole="header">
              {meal.name}
            </Text>

            <View style={styles.titleUnderline} />
          </View>

          <View style={styles.infoRow}>
            <FoodTags meal={meal} />
            <PriceBadge price={meal.price} />
          </View>

          <Text style={styles.description}>{meal.description}</Text>

          <Pressable
            style={({ pressed }) => [
              styles.addButton,
              pressed && styles.addButtonPressed,
            ]}
            onPress={() => addDish(meal)}
            accessibilityRole="button"
          >
            <Text style={styles.addButtonText}>Lägg till i måltid</Text>
          </Pressable>

          <Text style={styles.sectionTitle} accessibilityRole="header">
            Allergener
          </Text>
          <Text style={styles.allergens}>
            {meal.allergens.length > 0 ? meal.allergens.join(", ") : "Inga"}
          </Text>
        </View>
      </ScrollView>
      {selectedDishes.length > 0 && (
        <Pressable
          style={styles.mealBar}
          onPress={() => navigation.navigate("Meal")}
        >
          <Ionicons name="restaurant-outline" size={24} color={colors.white} />

          <Text style={styles.mealBarText}>
            Min måltid · {totalQuantity} rätter · {total} kr
          </Text>

          <Ionicons name="chevron-forward" size={22} color={colors.white} />
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
  scrollContent: {
    flexGrow: 1,
  },
  backButton: {
    position: "absolute",
    left: spacing.screenHorizontal,
  },
  card: {
    flexGrow: 1,
    marginTop: -CARD_OVERLAP,
    padding: spacing.screenHorizontal,
    paddingBottom: spacing.titleBottom,
    backgroundColor: colors.cream,
    borderTopLeftRadius: CARD_OVERLAP,
    borderTopRightRadius: CARD_OVERLAP,
  },
  titleWrapper: {
    alignSelf: "flex-start",
    position: "relative",
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: colors.darkGreen,
  },
  titleUnderline: {
    height: 4,
    borderRadius: 2,
    marginTop: 8,
    backgroundColor: colors.pink,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    marginTop: 20,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.3,
    color: colors.darkGreen,
  },
  sectionTitle: {
    marginTop: spacing.titleBottom,
    fontSize: 14,
    fontWeight: "bold",
    color: colors.pink,
  },
  allergens: {
    marginTop: 4,
    fontSize: 14,
    color: colors.darkGreen,
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
  favoriteButton: {
    position: "absolute",
    right: 16,
    top: 16,
    zIndex: 1,
  },
});
