import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "@pages/Home"
import Maps from "@pages/Map"
import Dashboard from "@pages/Dashboard"
import Complaint from "@pages/Complaint"

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName = '', rn = route.name;

          if (rn === "Home") {
            iconName = focused ? 'home' : 'home-outline'
          } else if (rn === "Maps") {
            iconName = focused ? 'map' : 'map-outline'
          } else if (rn === "Dashboard") {
            iconName = focused ? 'podium' : 'podium-outline'
          } else if (rn === "Complaint") {
            iconName = focused ? 'information-circle' : 'information-circle-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />
        }
      })}
    >

      <Screen
        name="Home"
        component={Home}
      />

      <Screen
        name="Maps"
        component={Maps}
      />

      <Screen
        name="Dashboard"
        component={Dashboard}
      />

      <Screen
        name="Complaint"
        component={Complaint}
      />
    </Navigator >
  )
}