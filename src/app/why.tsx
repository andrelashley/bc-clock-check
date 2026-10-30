import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRegion } from '@/data/RegionContext';
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
  const { selectedRegion } = useRegion();
  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>{selectedRegion.name}</Text>
        <Text style={styles.body}>{selectedRegion.summary}</Text>
        <Text style={styles.sectionTitle}>Across the province</Text>

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
          Comparisons on Home apply to your selected region on Nov. 1, 2026. Places such as Seattle and London still change clocks seasonally, so the difference can change during the year. East Kootenay and Golden remain one hour ahead of most of B.C.
        </Text>

        <Text style={styles.sectionTitle}>What should I check?</Text>
        <Text style={styles.body}>
          For {selectedRegion.name}, leave manual clocks unchanged on Nov. 1, 2026. Keep phones and computers updated and check their automatic time-zone setting against {selectedRegion.timeLabel} ({selectedRegion.zoneLabel}). Older software may still apply the previous seasonal rules.
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
