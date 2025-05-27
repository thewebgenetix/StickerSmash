import "@/global.css";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";

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
  <Stack>  
  </Stack>
  </ThemeProvider>
 
  )
}
