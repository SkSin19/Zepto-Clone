import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/colors';
import { FontSize, Radius, Spacing } from '@/constants/spacing';

interface HeroBannerProps {
  headline?: string;
  subline?: string;
  tagline?: string;
  backgroundColor?: string;
  onPress?: () => void;
}

export function HeroBanner({
  headline = 'EVERYDAY\nLOW PRICES!',
  subline,
  tagline = 'DELIVERED IN MINUTES',
  backgroundColor = Colors.primaryLight,
  onPress,
}: HeroBannerProps) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.95}
    >
      {/* Text side */}
      <View style={styles.textSide}>
        <Text style={styles.headline}>{headline}</Text>

        {subline ? <Text style={styles.subline}>{subline}</Text> : null}

        <View style={styles.taglineRow}>
          <Ionicons name="checkmark-circle" size={14} color={Colors.primary} />
          <Text style={styles.tagline}>{tagline}</Text>
        </View>
      </View>

      {/* Graphic side — coin/discount badge illustration */}
      <View style={styles.graphicSide}>
        <View style={styles.badgeOuter}>
          <View style={styles.badgeInner}>
            <Ionicons name="flash" size={28} color={Colors.white} />
          </View>
        </View>
        {/* Coin */}
        <View style={styles.coin}>
          <Text style={styles.coinEmoji}>🪙</Text>
        </View>
        <View style={[styles.coin, styles.coinSmall]}>
          <Text style={styles.coinEmojiSmall}>🪙</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.xxxl,
    paddingHorizontal: Spacing.lg,
    overflow: 'hidden',
  },
  textSide: {
    flex: 1,
  },
  headline: {
    fontSize: FontSize.xxxl,
    fontWeight: '900',
    color: Colors.primary,
    lineHeight: 28,
    letterSpacing: -0.9,
  },
  subline: {
    fontSize: FontSize.xl,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },
  taglineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: Spacing.sm,
  },
  tagline: {
    fontSize: FontSize.xs,
    fontWeight: '700',
    color: Colors.primary,
    letterSpacing: 0.5,
  },
  graphicSide: {
    width: 100,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  badgeOuter: {
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    // Jagged badge effect via shadow
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
  },
  badgeInner: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coin: {
    position: 'absolute',
    top: 0,
    right: 4,
  },
  coinSmall: {
    top: 'auto',
    bottom: 0,
    right: 0,
  },
  coinEmoji: {
    fontSize: 26,
  },
  coinEmojiSmall: {
    fontSize: 18,
  },
});