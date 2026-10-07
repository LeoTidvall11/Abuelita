import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { colors } from "../constants/Color";
import { getMealImage } from "../data/MealImages";
import { spacing } from "../constants/Spacing";
import FoodTags from "./labels/FoodTags";
import PriceBadge from "./labels/PriceBadge";

export default function MenuCards({ item, onPress, onAdd }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      onPress={onPress}
      android_ripple={{ color: colors.yellow }}>
      <Image
        source={getMealImage(item.id, "detail")}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {item.name}
        </Text>
        <View style={styles.titleUnderline} />
        <Text style={styles.description} numberOfLines={2}>
          {item.shortDescription}
        </Text>

        <View style={styles.bottomRow}>
          <FoodTags meal={item} small />
          <PriceBadge price={item.price} />
        </View>
        <Pressable onPress={onAdd}>
          <Text>Lägg till</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: spacing.screenHorizontal,
    marginBottom: spacing.cardGap,
    backgroundColor: colors.white,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 3,
    shadowColor: colors.darkGreen,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 3 / 2,
  },
  info: {
    padding: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    color: colors.darkGreen,
  },
  titleUnderline: {
    width: 40,
    height: 3,
    borderRadius: 2,
    marginTop: 6,
    backgroundColor: colors.pink,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.darkGreen,
    marginTop: 8,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    marginTop: 12,
  },
});
