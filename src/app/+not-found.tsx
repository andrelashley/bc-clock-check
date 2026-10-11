import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/components/ui';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Not found' }} />
      <View style={styles.container}>
        <Text style={styles.title}>Page not found</Text>
        <Link href="/" style={styles.link}>Go back home</Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 14,
  },
  link: {
    color: colors.teal,
    fontSize: 17,
    fontWeight: '800',
  },
});
