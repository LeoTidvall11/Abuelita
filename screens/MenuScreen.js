import { View, Text, StyleSheet, FlatList } from "react-native";
import { meals } from "../data/Data";
import MenuCards from "../components/MenuCards";

export default function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menu</Text>
      <FlatList
        data={meals}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  text: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginTop: 40,
  },
});
