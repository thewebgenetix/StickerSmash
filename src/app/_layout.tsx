import "@/global.css";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Slot } from "expo-router";

export default function RootLayout() {
  const myTheme = {
    ...DarkTheme, 
    colors: {
      ...DarkTheme.colors,
      primary: 'white',
    },
  };
  return(
  <ThemeProvider value = {myTheme}> 
  <Slot>  
  </Slot>
  </ThemeProvider>
 
  )
}
