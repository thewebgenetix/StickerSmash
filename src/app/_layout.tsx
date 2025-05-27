import "@/global.css";
import { Stack } from "expo-router";
import { View } from 'react-native';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';

function RootLayoutContent() {
  const { isDarkMode } = useTheme();

  return (
    <View className={isDarkMode ? 'dark' : ''} style={{ flex: 1 }}>
      <Stack>
        {/* Your screen components will go here */}
      </Stack>
    </View>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootLayoutContent />
    </ThemeProvider>
  );
}
