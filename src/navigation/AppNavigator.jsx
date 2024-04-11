import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator () {
    return (
         <NavigationContainer> 
            {/* espaco navegacao */}
            <Stack.Navigator>
                {/* bagulhinho prod coiso */}
                <Stack.Screen name="Home" component={HomeScreen} options={{title:"Inicial"}} />
                <Stack.Screen name="Login" component={LoginScreen} options={{title:"Login"}} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}
