import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Colors } from '@/constants/colors';
import { FontSize, Spacing } from '@/constants/spacing';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  style?: ViewStyle;
  titleColor?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  title,
  subtitle,
  style,
  titleColor = Colors.textPrimary,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <View style={[styles.container, align === 'center' && styles.centered, style]}>
      <Text style={[styles.title, { color: titleColor }, align === 'center' && styles.centerText]}>
        {title}
      </Text>
      {subtitle ? (
        <Text style={[styles.subtitle, align === 'center' && styles.centerText]}>{subtitle}</Text>
      ) : null}
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
  title: {
    fontSize: FontSize.xl,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },
  centerText: {
    textAlign: 'center',
  },
});
