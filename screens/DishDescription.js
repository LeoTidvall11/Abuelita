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
import PriceBadge from "../components/labels/PriceBadge.js";
import BackButton from "../components/buttons/BackButton";

const CARD_OVERLAP = 30;

export default function DishDescription({ route }) {
  const { mealId } = route.params;
  const meal = meals.find((m) => m.id === mealId);
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={getMealImage(meal.id, "detail")}
          style={{ width, height: width * 0.75 + insets.top }}
          resizeMode="cover"
        />

        <View style={styles.card}>
          <Text style={styles.title}>{meal.name}</Text>
          <View style={styles.titleUnderline} />

          <View style={styles.infoRow}>
            <FoodTags meal={meal} />
            <PriceBadge price={meal.price} />
          </View>

          <Text style={styles.description}>{meal.description}</Text>

          <Text style={styles.sectionTitle}>Allergener</Text>
          <Text style={styles.allergens}>
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
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: colors.darkGreen,
    borderBottomColor: colors.pink,
    borderBottomWidth: 2,
  },
  titleUnderline: {
    width: 100,
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
});
