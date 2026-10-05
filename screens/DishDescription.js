import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { meals } from "../data/Data";
import { getMealImage } from "../data/MealImages";
import { colors } from "../constants/Color";

export default function DishDescription({ route, navigation }) {
  const { mealId } = route.params;
  const meal = meals.find((m) => m.id === mealId);
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  if (!meal) return null;

  const tags = [
    meal.vegan ? "Vegansk" : meal.vegetarian ? "Vegetarisk" : null,
    meal.spicy > 0 ? "🌶".repeat(meal.spicy) : null,
    meal.alcohol ? "Innehåller alkohol" : null,
  ].filter(Boolean);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={getMealImage(meal.id, "detail")}
        style={{ width, height: (width * 2) / 3 }}
        resizeMode="cover"
      />
      <Pressable
        style={[styles.backButton, { top: insets.top + 8 }]}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={24} color={colors.darkGreen} />
      </Pressable>

      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={styles.text}>{meal.name}</Text>
          <Text style={styles.price}>{meal.price} kr</Text>
        </View>

        {tags.length > 0 && (
          <View style={styles.tags}>
            {tags.map((tag) => (
              <Text key={tag} style={styles.tag}>
                {tag}
              </Text>
            ))}
          </View>
        )}

        <Text style={styles.description}>{meal.description}</Text>

        <Text style={styles.allergens}>
          Allergener:{" "}
          {meal.allergens.length > 0 ? meal.allergens.join(", ") : "Inga"}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  backButton: {
    position: "absolute",
    left: 16,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 8,
  },
  content: {
    padding: 20,
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
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 12,
  },
  tag: {
    backgroundColor: colors.turquoise,
    color: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: "hidden",
    fontSize: 13,
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
});
