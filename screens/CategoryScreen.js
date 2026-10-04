import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { categories } from "../data/Data";
import { colors } from "../constants/Color";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function CategoryScreen({ navigation }) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menu</Text>

      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Pressable
            style={styles.categoryButton}
            android_ripple={{ color: colors.yellow }}
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
    </View>
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
    marginTop: 50,
    marginBottom: 24,
  },
  categoryButton: {
    backgroundColor: colors.cream,
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 18,
    marginHorizontal: 20,
    marginBottom: 12,
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
