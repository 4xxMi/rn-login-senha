import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MusicaScreen from '../screens/MusicaScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SplashScreen from '../screens/SplashScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import NoteInsert from '../screens/NoteInsert';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            {/* espaco navegacao */}
            <Stack.Navigator>
                {/* bagulhinho prod coiso */}
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ title: "SplashScreen", headerShown: false, }} />
                <Stack.Screen name="HomeScreen" component={TabsNavigation} options={{ title: "Inicial", }} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ title: "Register", }} />
                {/* <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{title:"Login",}} />   */}
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: "Login", }} />
                <Stack.Screen name="NoteInsert" component={NoteInsert} options={{ title: "notes", }} />
                <Stack.Screen name="MusicaScreen" component={MusicaScreen} options={{ title: "Music", }} />
            </Stack.Navigator>
        </NavigationContainer>
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