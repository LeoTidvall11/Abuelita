import { Text, StyleSheet, FlatList } from "react-native";
import { meals } from "../data/Data";
import MenuCards from "../components/MenuCards";
import { colors } from "../constants/Color";
import { SafeAreaView } from "react-native-safe-area-context";
import { spacing } from "../constants/Spacing";

export default function MenuScreen({ navigation, route }) {
  
  const categoryId = route.params?.categoryId;
  const filteredMeals = meals.filter((meal) => meal.category === categoryId);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Meny</Text>
      <FlatList
        data={filteredMeals}
        renderItem={({ item }) => (
          <MenuCards
            item={item}
            onPress={() =>
              navigation.navigate("Dish", {
                mealId: item.id,
              })
            }
          />
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
  },
});