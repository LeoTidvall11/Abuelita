import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import DishDescription from "./screens/DishDescription";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MenuStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MenuList" component={MenuScreen} />
      <Stack.Screen name="Dish" component={DishDescription} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "hotpink",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={MenuStack}
          options={{
            headerShown: false,
            popToTopOnBlur: true,
            tabBarIcon: ({ color }) => (
              <Ionicons name="restaurant" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
