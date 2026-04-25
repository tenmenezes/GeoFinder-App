import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";

import { Home, Search, User } from "lucide-react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#0f0f0f",
                    borderTopWidth: 0,
                    height: 60,
                },
                tabBarActiveTintColor: "#22c55e",
                tabBarInactiveTintColor: "#666",
                tabBarIcon: ({ color, size }) => {
                    if (route.name === "Home") return <Home color={color} size={size} />;
                    if (route.name === "Search") return <Search color={color} size={size} />;
                    if (route.name === "About") return <User color={color} size={size} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="About" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,

                    animation: "fade",
                }}
            >
                <Stack.Screen name="Main" component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}