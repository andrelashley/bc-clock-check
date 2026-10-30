import { Card, RowLink, Screen, colors } from '@/components/ui';
import { getComparisons, regions } from '@/data/clockData';
import { router } from 'expo-router';
import { useRegion } from '@/data/RegionContext';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const { selectedRegion, setSelectedRegionId } = useRegion();
  const comparisons = getComparisons(selectedRegion);

  return (
    <Screen top>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <Text style={styles.appName}>BC Clock Check</Text>
          <Pressable onPress={() => router.push('/why' as never)} hitSlop={10}>
            <Text style={styles.headerLink}>What changed?</Text>
          </Pressable>
        </View>

        <View style={styles.heroCard}>
          <Text style={styles.heroQuestion}>For {selectedRegion.name}: do I need to change my clocks?</Text>
          <Text style={styles.heroNo}>{selectedRegion.answer}</Text>
          <Text style={styles.heroTitle}>{selectedRegion.headline}</Text>
          <Text style={styles.heroBody}>{selectedRegion.summary}</Text>
          <View style={styles.heroPill}>
            <Text style={styles.heroPillText}>{selectedRegion.timeLabel} / {selectedRegion.zoneLabel} year-round</Text>
          </View>
          <Pressable onPress={() => router.push('/regions' as never)} hitSlop={8}>
            <Text style={styles.heroRegionLink}>Some B.C. regions are different ›</Text>
          </Pressable>
        </View>

        <Card style={styles.dateCard}>
          <View style={styles.calendarBadge}>
            <Text style={styles.calendarMonth}>NOV</Text>
            <Text style={styles.calendarDay}>1</Text>
          </View>
          <View style={styles.dateTextWrap}>
            <Text style={styles.dateEyebrow}>Next date to know</Text>
            <Text style={styles.dateTitle}>Sunday, Nov. 1, 2026</Text>
            <Text style={styles.dateBody}>{selectedRegion.name}: {selectedRegion.status}.</Text>
          </View>
        </Card>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Where are you?</Text>
          <Text style={styles.sectionSubtitle}>Some regions follow different rules.</Text>
        </View>

        <Card style={styles.regionList}>
          {regions.map((region) => {
            const selected = region.id === selectedRegion.id;
            return (
              <Pressable
                key={region.id}
                accessibilityRole="radio"
                accessibilityState={{ checked: selected }}
                onPress={() => setSelectedRegionId(region.id)}
                style={({ pressed }) => [
                  styles.regionOption,
                  selected && styles.regionSelected,
                  pressed && styles.pressed,
                ]}
              >
                <View style={[styles.radioOuter, selected && styles.radioOuterSelected]}>
                  {selected ? <View style={styles.radioInner} /> : null}
                </View>
                <View style={styles.regionTextWrap}>
                  <Text style={styles.regionName}>{region.shortName}</Text>
                  <Text style={styles.regionSubtitle}>{region.timeLabel}</Text>
                </View>
                <Text style={styles.regionZone}>{region.zoneLabel}</Text>
              </Pressable>
            );
          })}
        </Card>

        <View style={styles.comparisonHeader}>
          <Text style={styles.sectionTitle}>Compared to your region</Text>
          <Text style={styles.comparisonDate}>On Nov. 1, 2026</Text>
        </View>

        <View style={styles.comparisonList}>
          {comparisons.map((comparison) => (
            <Card key={comparison.city} style={styles.comparisonCard}>
              <Text style={styles.comparisonText}>{comparison.text}</Text>
              <View style={[styles.comparisonBadge, comparison.value === 'Same' && styles.sameBadge]}>
                <Text style={styles.comparisonBadgeText}>{comparison.value}</Text>
              </View>
            </Card>
          ))}
        </View>

        {/* <Card style={styles.widgetCard}>
          <View style={styles.widgetPreview}>
            <Text style={styles.widgetMiniTitle}>BC Clock Check</Text>
            <Text style={styles.widgetMiniText}>No clock change</Text>
            <Text style={styles.widgetMiniSub}>UTC-7</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.widgetTitle}>Add the widget</Text>
            <Text style={styles.widgetBody}>See the answer on your home screen.</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </Card> */}

        <View style={styles.linkGroup}>
          <RowLink title="Regions" subtitle="See the B.C. regional cases" onPress={() => router.push('/regions' as never)} />
          <RowLink title="About" subtitle="Privacy, source note, and version" onPress={() => router.push('/about' as never)} />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    paddingTop: 20,
    paddingBottom: 36,
  },
  headerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  appName: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
  headerLink: {
    color: colors.teal,
    fontSize: 14,
    fontWeight: '800',
  },
  heroCard: {
    backgroundColor: colors.hero,
    borderRadius: 24,
    padding: 20,
    marginBottom: 14,
  },
  heroQuestion: {
    color: colors.teal,
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 4,
  },
  heroNo: {
    color: colors.heroDark,
    fontSize: 76,
    lineHeight: 82,
    fontWeight: '900',
    letterSpacing: -3,
  },
  heroTitle: {
    color: colors.text,
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '900',
    marginTop: 2,
  },
  heroBody: {
    color: colors.text,
    fontSize: 17,
    lineHeight: 24,
    marginTop: 12,
  },
  heroPill: {
    alignSelf: 'flex-start',
    backgroundColor: colors.white,
    borderRadius: 999,
    marginTop: 16,
    paddingHorizontal: 13,
    paddingVertical: 8,
  },
  heroPillText: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '800',
  },
  heroRegionLink: {
    color: colors.teal,
    fontSize: 14,
    fontWeight: '800',
    marginTop: 14,
  },
  dateCard: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 14,
    marginBottom: 22,
  },
  calendarBadge: {
    borderColor: colors.line,
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
    width: 58,
  },
  calendarMonth: {
    backgroundColor: colors.teal,
    color: colors.white,
    fontSize: 12,
    fontWeight: '900',
    paddingVertical: 5,
    textAlign: 'center',
  },
  calendarDay: {
    backgroundColor: colors.white,
    color: colors.text,
    fontSize: 28,
    fontWeight: '800',
    paddingVertical: 6,
    textAlign: 'center',
  },
  dateTextWrap: {
    flex: 1,
  },
  dateEyebrow: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '700',
  },
  dateTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '900',
    marginTop: 2,
  },
  dateBody: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 2,
  },
  sectionHeader: {
    marginBottom: 10,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '900',
  },
  sectionSubtitle: {
    color: colors.muted,
    fontSize: 13,
    marginTop: 3,
  },
  regionList: {
    padding: 7,
    marginBottom: 22,
  },
  regionOption: {
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    gap: 12,
    padding: 12,
  },
  regionSelected: {
    backgroundColor: colors.tealSoft,
  },
  pressed: {
    opacity: 0.72,
  },
  radioOuter: {
    alignItems: 'center',
    borderColor: '#AAB7BE',
    borderRadius: 99,
    borderWidth: 2,
    height: 23,
    justifyContent: 'center',
    width: 23,
  },
  radioOuterSelected: {
    borderColor: colors.teal,
  },
  radioInner: {
    backgroundColor: colors.teal,
    borderRadius: 99,
    height: 11,
    width: 11,
  },
  regionTextWrap: {
    flex: 1,
  },
  regionName: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
  regionSubtitle: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 2,
  },
  regionZone: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '800',
  },
  comparisonHeader: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  comparisonDate: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '700',
  },
  comparisonList: {
    gap: 10,
    marginBottom: 18,
  },
  comparisonCard: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  comparisonText: {
    color: colors.text,
    flex: 1,
    fontSize: 16,
    fontWeight: '800',
  },
  comparisonBadge: {
    backgroundColor: '#F0EFEC',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  sameBadge: {
    backgroundColor: colors.tealSoft,
  },
  comparisonBadgeText: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '900',
  },
  widgetCard: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 14,
    marginBottom: 16,
  },
  widgetPreview: {
    backgroundColor: colors.heroDark,
    borderRadius: 14,
    height: 64,
    justifyContent: 'center',
    paddingHorizontal: 9,
    width: 64,
  },
  widgetMiniTitle: {
    color: colors.white,
    fontSize: 7,
    fontWeight: '800',
    marginBottom: 5,
  },
  widgetMiniText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '900',
    lineHeight: 11,
  },
  widgetMiniSub: {
    color: colors.white,
    fontSize: 8,
    fontWeight: '800',
    marginTop: 5,
  },
  widgetTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '900',
  },
  widgetBody: {
    color: colors.muted,
    fontSize: 13,
    marginTop: 2,
  },
  chevron: {
    color: colors.muted,
    fontSize: 26,
    fontWeight: '500',
  },
  linkGroup: {
    borderColor: colors.line,
    borderRadius: 18,
    borderWidth: 1,
    overflow: 'hidden',
  },
});
