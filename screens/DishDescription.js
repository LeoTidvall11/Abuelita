import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { meals } from "../data/Data";
import { getMealImage } from "../data/MealImages";
import { colors } from "../constants/Color";
import { spacing } from "../constants/Spacing";
import FoodTags from "../components/labels/FoodTags.js";
import BackButton from "../components/buttons/BackButton";

export default function DishDescription({ route }) {
  const { mealId } = route.params;
  const meal = meals.find((m) => m.id === mealId);
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.topBanner}></View>
        <Image
          source={getMealImage(meal.id, "detail")}
          style={[styles.image, { width, height: (width * 2) / 3 }]}
          resizeMode="cover"
        />

        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text style={styles.text}>{meal.name}</Text>
            <Text style={styles.price}>{meal.price} kr</Text>
          </View>

          <FoodTags meal={meal} />

          <Text style={styles.description}>{meal.description}</Text>

          <Text style={styles.allergens}>
            Allergener:{" "}
            {meal.allergens.length > 0 ? meal.allergens.join(", ") : "Inga"}
          </Text>
        </View>
      </ScrollView>

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
  topBanner: {
    marginTop: spacing.screenTop,
  },
  image: {
    borderBottomRightRadius: 50,
    marginTop: 40,
    borderBottomWidth: 2,
    borderBottomLeftRadius: 50,
    elevation: 4,
    shadowColor: colors.darkGreen,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0,
    shadowRadius: 10,
    borderColor: colors.yellow,
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
});
