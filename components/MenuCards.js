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
      accessibilityRole="button"
      accessibilityLabel={`${item.name}, ${item.price} kronor. ${item.shortDescription}`}
      accessibilityHint="Öppnar rättens beskrivning"
      accessibilityActions={[{ name: "add", label: "Lägg till i måltid" }]}
      onAccessibilityAction={(event) => {
        if (event.nativeEvent.actionName === "add") onAdd();
      }}
      android_ripple={{ color: colors.yellow }}>
      <Image
        source={getMealImage(item.id, "detail")}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.info}>
        <View style={styles.topRow}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.titleUnderline} />
          </View>
          <PriceBadge price={item.price} />
        </View>
        <Text style={styles.description} numberOfLines={2}>
          {item.shortDescription}
        </Text>

        <View style={styles.bottomRow}>
          <FoodTags meal={item} small />
          <Pressable
            onPress={onAdd}
            style={styles.addButton}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel={`Lägg till ${item.name} i måltid`}>
            <Text style={styles.addButtonText}>Lägg till</Text>
          </Pressable>
        </View>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.addButton,
          pressed && styles.addButtonPressed,
        ]}
        onPress={onAdd}
      >
        <Text style={styles.addButtonText}>Lägg till</Text>
      </Pressable>
    </View>
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

  cardContent: {
    backgroundColor: colors.white,
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
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleWrapper: {
    flexShrink: 1,
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    color: colors.darkGreen,
  },
  titleUnderline: {
    height: 4,
    borderRadius: 2,
    marginTop: 8,
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
  addButton: {
    backgroundColor: colors.turquoise,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignItems: "center",
  },

  addButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
