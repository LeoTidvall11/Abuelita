import { StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../constants/Color";

export default function BackButton({ onPress, style }) {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.backButton, style]}
      onPress={onPress ?? navigation.goBack}
      hitSlop={8}
      accessibilityRole="button"
      accessibilityLabel="Tillbaka"
    >
      <Ionicons name="chevron-back" size={24} color={colors.darkGreen} />
    </Pressable>
  );
}

export const BACK_BUTTON_SIZE = 40;

const styles = StyleSheet.create({
  backButton: {
    width: BACK_BUTTON_SIZE,
    height: BACK_BUTTON_SIZE,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderRadius: BACK_BUTTON_SIZE / 2,
  },
});
