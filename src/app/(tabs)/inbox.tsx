import { Switch, Text, View } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

export default function InboxScreen() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <View className="flex-1 items-center justify-center bg-background dark:bg-dark-background">
      <Text className="text-text dark:text-dark-text">Inbox Screen</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <Text style={{ marginRight: 10 }} className="text-text dark:text-dark-text">Dark Mode:</Text>
        <Switch
          value={isDarkMode}
          onValueChange={setIsDarkMode}
        />
      </View>
    </View>
  );
}