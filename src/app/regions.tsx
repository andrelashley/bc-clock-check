import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, Pill, Screen, colors } from '@/components/ui';
import { regions } from '@/data/clockData';

export default function RegionsScreen() {
  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Which B.C. region are you in?</Text>
        <Text style={styles.subtitle}>Most people in B.C. have the same answer: no clock change. A few regions are different enough to check.</Text>

        <View style={styles.list}>
          {regions.map((region) => (
            <Card key={region.id} style={styles.regionCard}>
              <View style={styles.cardHeader}>
                <Text style={styles.regionName}>{region.name}</Text>
                <Pill tone={region.statusTone === 'caution' ? 'warning' : 'good'}>{region.zoneLabel}</Pill>
              </View>
              <Text style={styles.places}>{region.places}</Text>
              <Text style={styles.summary}>{region.summary}</Text>
              <View style={styles.statusRow}>
                <View style={[styles.dot, region.statusTone === 'caution' && styles.warningDot]} />
                <Text style={[styles.status, region.statusTone === 'caution' && styles.warningText]}>{region.status}</Text>
              </View>
              {region.note ? <Text style={styles.note}>{region.note}</Text> : null}
            </Card>
          ))}
        </View>

        <Text style={styles.footerNote}>Not sure which applies? Your municipality or regional district can confirm.</Text>
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
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  subtitle: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 23,
    marginBottom: 18,
  },
  list: {
    gap: 12,
  },
  regionCard: {
    padding: 18,
  },
  cardHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  regionName: {
    color: colors.text,
    flex: 1,
    fontSize: 21,
    fontWeight: '900',
  },
  places: {
    color: colors.muted,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    marginBottom: 6,
  },
  summary: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 22,
  },
  statusRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    marginTop: 13,
  },
  dot: {
    backgroundColor: colors.teal,
    borderRadius: 999,
    height: 8,
    width: 8,
  },
  warningDot: {
    backgroundColor: colors.amberText,
  },
  status: {
    color: colors.teal,
    fontSize: 14,
    fontWeight: '900',
  },
  warningText: {
    color: colors.amberText,
  },
  note: {
    backgroundColor: colors.amberSoft,
    borderRadius: 12,
    color: colors.amberText,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 12,
    padding: 12,
  },
  footerNote: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 18,
  },
});
