import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, Screen, colors } from '@/components/ui';

const timeline = [
  {
    label: 'Mar. 8, 2026',
    text: 'Most of B.C. moved its clocks forward one last time.',
  },
  {
    label: 'Nov. 1, 2026',
    text: 'Clocks would normally fall back. Most of B.C. stays where it is.',
  },
  {
    label: 'From now on',
    text: 'Most of B.C. uses UTC-7 all year. The province calls this Pacific Time.',
  },
];

export default function WhyScreen() {
  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>What changed?</Text>

        <Card style={styles.timelineCard}>
          {timeline.map((item, index) => (
            <View key={item.label} style={[styles.timelineRow, index !== timeline.length - 1 && styles.timelineDivider]}>
              <Text style={styles.timelineLabel}>{item.label}</Text>
              <Text style={styles.timelineText}>{item.text}</Text>
            </View>
          ))}
        </Card>

        <Text style={styles.sectionTitle}>Why do differences change?</Text>
        <Text style={styles.body}>
          Many nearby places still change their clocks. When Washington state falls back on Nov. 1, Seattle becomes 1 hour behind most of B.C. until it springs forward again in March.
        </Text>

        <Text style={styles.sectionTitle}>What should I check?</Text>
        <Text style={styles.body}>
          Phones and computers should stay correct on their own. If your phone changes on Nov. 1, make sure its software is up to date. Manual clocks, like ovens, microwaves, cars and wall clocks, can be left alone for most of B.C.
        </Text>
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
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: -0.6,
    lineHeight: 38,
    marginBottom: 16,
  },
  timelineCard: {
    marginBottom: 26,
    padding: 0,
    overflow: 'hidden',
  },
  timelineRow: {
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  timelineDivider: {
    borderBottomColor: colors.line,
    borderBottomWidth: 1,
  },
  timelineLabel: {
    color: colors.teal,
    fontSize: 13,
    fontWeight: '900',
    width: 88,
  },
  timelineText: {
    color: colors.text,
    flex: 1,
    fontSize: 15,
    lineHeight: 21,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '900',
    marginTop: 4,
    marginBottom: 8,
  },
  body: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 22,
  },
});
