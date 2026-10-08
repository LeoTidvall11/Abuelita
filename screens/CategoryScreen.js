import { Text, StyleSheet, FlatList, Pressable } from "react-native";
import { categories } from "../data/Data";
import { colors } from "../constants/Color";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { spacing } from "../constants/Spacing";
import { SafeAreaView } from "react-native-safe-area-context";
import { fonts } from "../constants/Fonts";

export default function CategoryScreen({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} accessibilityRole="header">
        Meny
      </Text>

      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Pressable
            style={styles.categoryButton}
            android_ripple={{ color: colors.yellow }}
            accessibilityRole="button"
            accessibilityLabel={item.title}
            onPress={() =>
              navigation.navigate("MenuList", {
                categoryId: item.id,
              })
            }
          >
            <MaterialCommunityIcons
              name={item.icon}
              size={24}
              color={colors.turquoise}
            />
            <Text style={styles.categoryText}>{item.title}</Text>
            <Ionicons name="chevron-forward" size={22} color={colors.pink} />
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  text: {
    fontSize: 36,
    fontWeight: "800",
    color: colors.turquoise,
    textAlign: "center",
    marginTop: spacing.screenTop,
    marginBottom: spacing.titleBottom,
    fontFamily: fonts.grenze,
  },
  categoryButton: {
    backgroundColor: colors.cream,
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 18,
    marginHorizontal: spacing.screenHorizontal,
    marginBottom: spacing.cardGap,
    borderWidth: 1,
    borderColor: colors.yellow,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  categoryText: {
    color: colors.darkGreen,
    fontSize: 18,
    fontWeight: "700",
    flex: 1,
    marginLeft: 12,
  },
});
