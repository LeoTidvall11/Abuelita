import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../constants/Color";

export default function PriceBadge({ price }) {
  return (
    <View
      style={styles.priceBadge}
      accessible
      accessibilityLabel={`${price} kronor`}>
      <Text style={styles.priceText}>{price} kr</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  priceBadge: {
    backgroundColor: colors.pink,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 12,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
});
