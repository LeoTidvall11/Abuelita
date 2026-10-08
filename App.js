import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import DishDescription from "./screens/DishDescription";
import CategoryScreen from "./screens/CategoryScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AboutUs from "./screens/AboutUs";
import { colors } from "./constants/Color";
import { FavoritesProvider } from "./context/FavoritesContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MenuStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Categories" component={CategoryScreen} />
      <Stack.Screen name="MenuList" component={MenuScreen} />
      <Stack.Screen name="Dish" component={DishDescription} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: colors.turquoise,
            tabBarInactiveTintColor: colors.darkGreen,
            headerShown: false,
            tabBarStyle: {
              backgroundColor: colors.cream,
              borderTopColor: colors.darkGreen,
              height: 80,
              paddingTop: 10,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "Hem",
              tabBarStyle: { display: "none" },
              tabBarIcon: ({ color }) => (
                <Ionicons name="home" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Menu"
            component={MenuStack}
            options={{
              tabBarLabel: "Meny",
              headerShown: false,
              popToTopOnBlur: true,
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? "restaurant" : "restaurant-outline"}
                  size={24}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="AboutUs"
            component={AboutUs}
            options={{
              tabBarLabel: "Om oss",
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? "people-circle" : "people-circle-outline"}
                  size={24}
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}
