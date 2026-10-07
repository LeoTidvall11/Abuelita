import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../constants/Color";

export function getMealTags(meal) {
  return [
    meal.vegan ? "Vegansk"
    : meal.vegetarian ? "Vegetarisk"
    : null,
    meal.spicy > 0 ? "🌶".repeat(meal.spicy) : null,
    meal.alcohol ? "alkohol" : null,
  ].filter(Boolean);
}

export default function FoodTags({ meal, small = false }) {
  const tags = getMealTags(meal);
  if (tags.length === 0) return null;

  return (
    <View style={[styles.tags, small && styles.tagsSmall]}>
      {tags.map((tag) => (
        <Text key={tag} style={[styles.tag, small && styles.tagSmall]}>
          {tag}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 12,
  },
  tagsSmall: {
    marginTop: 6,
    gap: 4,
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
  tagSmall: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    fontSize: 11,
  },
});
