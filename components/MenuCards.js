import { Text, StyleSheet, Pressable } from "react-native";
import { colors } from "../constants/Color";
export default function MenuCards({ item, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{item.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    color: colors.darkGreen,
  },
});
