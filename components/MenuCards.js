import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { colors } from "../constants/Color";
import { getMealImage } from "../data/MealImages";
import { spacing } from "../constants/Spacing";
import FoodTags from "./labels/FoodTags";

export default function MenuCards({ item, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      onPress={onPress}
      android_ripple={{ color: colors.yellow }}>
      <View style={styles.topBanner} />

      <View style={styles.contentRow}>
        <Image source={getMealImage(item.id, "thumb")} style={styles.image} />
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.title} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.description} numberOfLines={2}>
              {item.shortDescription}
            </Text>
          </View>

          <View style={styles.bottomRow}>
            <View style={styles.tagsWrapper}>
              <FoodTags meal={item} small />
            </View>
            <View style={styles.priceBadge}>
              <Text style={styles.priceText}>{item.price} kr</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 12,
    marginHorizontal: spacing.screenHorizontal,
    marginVertical: 10,
    borderWidth: 1,
    overflow: "hidden",
    elevation: 4,
    shadowColor: colors.darkGreen,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0,
    shadowRadius: 10,
    borderColor: colors.yellow,
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.95 }],
  },
  topBanner: {
    height: 8,
    backgroundColor: colors.pink,
  },
  contentRow: {
    flexDirection: "row",
    padding: 12,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 12,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 14,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 19,
    color: colors.darkGreen,
    fontWeight: "800",
    letterSpacing: 0.3,
  },
  description: {
    fontSize: 13,
    color: colors.darkGreen,
    opacity: 0.7,
    marginTop: 4,
    lineHeight: 18,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  tagsWrapper: {
    flex: 1,
    marginRight: 8,
  },
  priceBadge: {
    backgroundColor: colors.orange,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  priceText: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.white,
  },
});
