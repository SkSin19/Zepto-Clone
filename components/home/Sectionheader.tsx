import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Colors } from '@/constants/colors';
import { FontSize, Spacing } from '@/constants/spacing';

interface SectionHeaderProps {
  /** Primary (black) part of the title */
  title: string;
  /** Secondary (purple accent) part of the title, rendered inline after title */
  accentTitle?: string;
  subtitle?: string;
  showSeeAll?: boolean;
  onSeeAll?: () => void;
  style?: ViewStyle;
  align?: 'left' | 'center';
}

export function SectionHeader({
  title,
  accentTitle,
  subtitle,
  showSeeAll = false,
  onSeeAll,
  style,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <View style={[styles.container, align === 'center' && styles.centered, style]}>
      <View style={styles.topRow}>
        {/* Title — supports two-tone "Trending Near [You]" */}
        <Text style={styles.title}>
          {title}
          {accentTitle ? <Text style={styles.accentTitle}> {accentTitle}</Text> : null}
        </Text>

        {showSeeAll && (
          <TouchableOpacity onPress={onSeeAll} activeOpacity={0.7}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        )}
      </View>

      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
  },
  centered: {
    alignItems: 'center',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: FontSize.xl,
    fontWeight: '800',
    color: Colors.textPrimary,
  },
  accentTitle: {
    fontSize: FontSize.xl,
    fontWeight: '800',
    color: Colors.primary,
  },
  seeAll: {
    fontSize: FontSize.sm,
    color: Colors.primary,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },
});