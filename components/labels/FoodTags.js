import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../constants/Color";

export function getMealTags(meal) {
  return [
    meal.vegan ? "Vegansk"
    : meal.vegetarian ? "Vegetarisk"
    : null,
    meal.spicy > 0 ? "🌶".repeat(meal.spicy) : null,
    meal.alcohol ? "Alkohol" : null,
  ].filter(Boolean);
}

function getTagLabel(tag) {
  return tag.startsWith("🌶") ? `Styrka ${[...tag].length}` : tag;
}

export default function FoodTags({ meal, small = false }) {
  const tags = getMealTags(meal);
  if (tags.length === 0) return null;

  return (
    <View style={styles.tags}>
      {tags.map((tag) => (
        <Text
          key={tag}
          style={[styles.tag, small && styles.tagSmall]}
          accessibilityLabel={getTagLabel(tag)}>
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
    flexShrink: 1,
    gap: 8,
  },
  tag: {
    backgroundColor: colors.turquoise,
    color: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    overflow: "hidden",
    fontSize: 13,
  },
  tagSmall: {
    paddingHorizontal: 6,
    paddingVertical: 5,
    fontSize: 11,
  },
});
