import { ScrollView, StyleSheet, Text } from 'react-native';
import { Card, Screen, colors } from '@/components/ui';

export default function AboutScreen() {
  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>About</Text>
        <Text style={styles.intro}>BC Clock Check answers one question: do you need to change your clocks?</Text>

        <Card style={styles.card}>
          <Text style={styles.eyebrow}>Privacy</Text>
          <Text style={styles.cardTitle}>This app does not collect personal information or use location data.</Text>
          <Text style={styles.body}>No accounts. No tracking. Your region choice stays on your device.</Text>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.eyebrow}>Source note</Text>
          <Text style={styles.body}>Source: Government of B.C. time change update, March 2026. This app is not affiliated with the Government of British Columbia.</Text>
        </Card>

        <Text style={styles.version}>Version 1.0</Text>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    paddingBottom: 36,
  },
  title: {
    color: colors.text,
    fontSize: 38,
    fontWeight: '900',
    letterSpacing: -0.7,
    marginBottom: 8,
  },
  intro: {
    color: colors.text,
    fontSize: 20,
    lineHeight: 28,
    marginBottom: 22,
  },
  card: {
    marginBottom: 14,
  },
  eyebrow: {
    color: colors.teal,
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1.2,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  cardTitle: {
    color: colors.text,
    fontSize: 21,
    fontWeight: '900',
    lineHeight: 28,
    marginBottom: 10,
  },
  body: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 24,
  },
  version: {
    color: colors.muted,
    fontSize: 14,
    marginTop: 12,
  },
});
