import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Explore, Home, Profile, Wishlist } from "../screens";
import { Fontisto, FontAwesome5, AntDesign } from "@expo/vector-icons";
import AppColors from "../config/AppColors";
import { useFonts } from "expo-font";
const Tab = createBottomTabNavigator();

function BottomTabs() {
  const [loaded] = useFonts({
    Pushster: require("../assets/fonts/Pushster-Regular.ttf"),
    Poppins: require("../assets/fonts/Poppins-ExtraLight.ttf"),
    Josefin: require("../assets/fonts/JosefinSans-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: AppColors.primary,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          fontFamily: "Poppins",
          elevation: 2,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={"home"}
              size={25}
              color={focused ? AppColors.primary : AppColors.grey}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="wpexplorer"
              size={25}
              color={focused ? AppColors.primary : AppColors.grey}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto
              name={"heart-alt"}
              size={23}
              color={focused ? AppColors.primary : AppColors.grey}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={"user"}
              size={25}
              color={focused ? AppColors.primary : AppColors.grey}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabs;
