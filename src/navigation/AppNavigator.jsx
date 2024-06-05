import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MusicaScreen from '../screens/MusicaScreen';
import SplashScreen from '../screens/SplashScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import NoteInsert from '../screens/NoteInsert';
import { Provider } from "react-native-paper";
import {
    ThemeDark,
    ThemeDarkNavigation,
    ThemeLight,
    ThemeLightNavigation,
} from "../config/theme";
import { useTheme } from "../contexts/ThemeContext";


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    const { isDarkTheme } = useTheme();

    const theme = isDarkTheme ? ThemeDark : ThemeLight;
    const themeNavigation = isDarkTheme ? ThemeDarkNavigation : ThemeLightNavigation;
    
    return (
        <Provider theme={theme}>
        <NavigationContainer theme={themeNavigation}>
            {/* espaco navegacao */}
            <Stack.Navigator>
                {/* bagulhinho prod coiso */}
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ title: "SplashScreen", headerShown: false, }} />
                <Stack.Screen name="HomeScreen" component={TabsNavigation} options={{ title: "Inicial", }} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ title: "Register", }} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: "Login", }} />
                <Stack.Screen name="NoteInsert" component={NoteInsert} options={{ title: "notes", }} />
                <Stack.Screen name="MusicaScreen" component={MusicaScreen} options={{ title: "Music", }} />
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    );
}

const Tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Insert" component={NoteInsert} />
            <Tabs.Screen name="Home" component={HomeScreen} />
        </Tabs.Navigator>
    );
}