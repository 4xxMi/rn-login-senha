import { Provider } from "react-native-paper";
import AppNavigator from "./src/navigation/AppNavigator";
import { themeDark, themeLight } from "./src/config/theme";
import { useColorScheme } from "react-native";

export default function App() {
  const colorScheme = useColorScheme();
  console.log(colorScheme);

  // https://callstack.github.io/react-native-paper/docs/guides/theming/#creating-dynamic-theme-colors
  const isDarkMode = colorScheme === "dark";
  
  // operador ternário
  const theme = isDarkMode ? themeDark : themeLight;

  return (
    <Provider theme={theme}>
      <AppNavigator />
    </Provider>
  );
}
