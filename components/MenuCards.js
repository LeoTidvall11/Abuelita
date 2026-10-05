import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { colors } from "../constants/Color";
import { getMealImage } from "../data/MealImages";
import { spacing } from "../constants/Spacing";

export default function MenuCards({ item, onPress }) {
  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
      android_ripple={{ color: colors.yellow }}
    >
      <Image source={getMealImage(item.id, "thumb")} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.price}>{item.price} kr</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 12,
    marginHorizontal: spacing.screenHorizontal,
    marginVertical: 8,
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.yellow,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  text: {
    fontSize: 18,
    color: colors.darkGreen,
  },
  description: {
    fontSize: 13,
    color: colors.darkGreen,
    opacity: 0.7,
    marginTop: 2,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.pink,
    marginTop: 4,
  },
});
