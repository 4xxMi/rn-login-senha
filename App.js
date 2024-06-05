import { Provider } from "react-native-paper";
import { ThemeDark, ThemeLight } from "./src/config/theme";
import { useColorScheme } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { ThemeProvider } from "./src/contexts/ThemeContext";

export default function App() {
  // pega o tema do dispositivo
  const colorScheme = useColorScheme();
  // criação de tema
  // https://callstack.github.io/react-native-paper/docs/guides/theming/#creating-dynamic-theme-colors
  const isDarkMode = colorScheme === "dark";

  // operador ternário
  const theme = isDarkMode ? ThemeDark : ThemeLight;

  return (
    <ThemeProvider>
    <Provider theme={theme}>
      {/* aqui usamos o provider do RNP */}
      <AppNavigator />
    </Provider>
    </ThemeProvider>
  );
}
