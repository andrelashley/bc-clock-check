import { StatusBar } from 'expo-status-bar';
import { RegionProvider } from '@/data/RegionContext';
import { Stack } from 'expo-router';
import { colors } from '@/components/ui';

export default function RootLayout() {
  return (
    <RegionProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerShadowVisible: false,
          headerTitleStyle: { color: colors.text, fontWeight: '800' },
          headerTintColor: colors.teal,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'BC Clock Check', headerShown: false }} />
        <Stack.Screen name="regions" options={{ title: 'Regions' }} />
        <Stack.Screen name="why" options={{ title: 'What changed?' }} />
        <Stack.Screen name="about" options={{ title: 'About' }} />
      </Stack>
    </RegionProvider>
  );
}
