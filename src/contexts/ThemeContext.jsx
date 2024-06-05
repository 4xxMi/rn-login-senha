import { useContext, useEffect, useState, createContext } from 'react';
import { useColorScheme } from "react-native";


export const ThemeContext = createContext();
export function ThemeProvider({children}){
    //detecta o tema
    const scheme = useColorScheme ();
    //light ou dark
    const [isDarkTheme, setIsDarkTheme] = useState(scheme === 'dark');
   
   
    //escuta a variavel pra trocar se mudar
    useEffect( ()=> {
        setIsDarkTheme(scheme === 'dark');
    }, [scheme]); 

    return(
        <ThemeContext.Provider value={{isDarkTheme, toggleTheme: () => setIsDarkTheme(!isDarkTheme)}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);
