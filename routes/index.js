import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PokedexNavigation from "./PokedexNavigation";
import Account from "../pages/Account";
import Favorite from "../pages/Favorite";

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "list-sharp" : "list-sharp";
          } else if (route.name === "Favorite") {
            iconName = focused ? "git-compare-outline" : "git-compare-outline";
          }

          // Return the icon component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        options={{ headerShown: false, title: "Pokedex" }}
        component={PokedexNavigation}
      />
    </Tab.Navigator>
  );
};

export default MainRoutes;
