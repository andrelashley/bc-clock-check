import { SafeAreaView } from 'react-native-safe-area-context';
import { PropsWithChildren } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export const colors = {
  background: '#F4F1ED',
  surface: '#FFFEFB',
  surfaceSoft: '#E4F8F1',
  hero: '#CFF7E9',
  heroDark: '#00564F',
  text: '#14232B',
  muted: '#687179',
  line: '#E5DFD7',
  teal: '#006C63',
  tealSoft: '#DDF7F1',
  amberSoft: '#FFF0D5',
  amberText: '#7B4A00',
  white: '#FFFFFF',
};

export function Screen({ children, top = false }: PropsWithChildren<{ top?: boolean }>) {
  return <SafeAreaView edges={top ? ['top', 'left', 'right', 'bottom'] : ['left', 'right', 'bottom']} style={styles.screen}>{children}</SafeAreaView>;
}

export function Card({ children, style }: PropsWithChildren<{ style?: object }>) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function RowLink({ title, subtitle, onPress }: { title: string; subtitle?: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.rowLink, pressed && styles.pressed]}>
      <View style={{ flex: 1 }}>
        <Text style={styles.rowTitle}>{title}</Text>
        {subtitle ? <Text style={styles.rowSubtitle}>{subtitle}</Text> : null}
      </View>
      <Text style={styles.chevron}>›</Text>
    </Pressable>
  );
}

export function Pill({ children, tone = 'default' }: PropsWithChildren<{ tone?: 'default' | 'good' | 'warning' }>) {
  return (
    <View style={[styles.pill, tone === 'good' && styles.pillGood, tone === 'warning' && styles.pillWarning]}>
      <Text style={[styles.pillText, tone === 'warning' && styles.pillWarningText]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.line,
    borderWidth: 1,
    borderRadius: 20,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 1,
  },
  rowLink: {
    backgroundColor: colors.surface,
    borderColor: colors.line,
    borderTopWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 17,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.72,
  },
  rowTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  rowSubtitle: {
    marginTop: 2,
    color: colors.muted,
    fontSize: 13,
  },
  chevron: {
    color: colors.muted,
    fontSize: 24,
    fontWeight: '500',
  },
  pill: {
    alignSelf: 'flex-start',
    backgroundColor: '#F2F0EC',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  pillGood: {
    backgroundColor: colors.tealSoft,
  },
  pillWarning: {
    backgroundColor: colors.amberSoft,
  },
  pillText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '800',
  },
  pillWarningText: {
    color: colors.amberText,
  },
});
