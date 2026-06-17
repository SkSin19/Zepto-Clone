import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/colors';
import { FontSize, Radius, Spacing } from '@/constants/spacing';

interface FestiveSectionProps {
  /**
   * Path to the Lottie JSON, e.g. require('@/assets/lottie/train.json').
   * Left undefined for now — drop your real file in
   * assets/lottie/train.json and pass it in from HomeScreen once ready.
   */
  lottieSource?: string;
  heading?: string;
  subheading?: string;
}

const SCENE_HEIGHT = 180;

export function FestiveSection({
  lottieSource,
  heading = '🎄 Christmas is Here!',
  subheading = 'Festive deals just for you',
}: FestiveSectionProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headingWrapper}>
        <View style={styles.sparkleLine} />
        <Text style={styles.heading}>{heading}</Text>
        <View style={styles.sparkleLine} />
      </View>
      <Text style={styles.subheading}>{subheading}</Text>

      <View style={styles.sceneWrapper}>
        {lottieSource ? (
          <LottieView source={lottieSource} autoPlay loop style={styles.lottie} resizeMode="cover" />
        ) : (
          // Placeholder shown until the real train.json is dropped in.
          // Swap this whole branch out once lottieSource is provided —
          // FestiveSection's public API already supports it, no other
          // file needs to change.
          <View style={styles.placeholder}>
            <Text style={styles.placeholderEmoji}>🚂</Text>
            <Text style={styles.placeholderText}>Train animation goes here</Text>
            <Text style={styles.placeholderSubtext}>
              Drop your Lottie file at assets/lottie/train.json
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.xl,
    marginHorizontal: Spacing.lg,
    backgroundColor: Colors.festiveCream,
    borderRadius: Radius.lg,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.md,
    borderWidth: 1,
    borderColor: '#F0E0B8',
  },
  headingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
  },
  sparkleLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.festiveGold,
    opacity: 0.5,
  },
  heading: {
    fontSize: FontSize.xl,
    fontWeight: '800',
    color: Colors.festiveRed,
    textAlign: 'center',
  },
  subheading: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: Spacing.xs,
  },
  sceneWrapper: {
    marginTop: Spacing.lg,
    height: SCENE_HEIGHT,
    borderRadius: Radius.md,
    overflow: 'hidden',
    backgroundColor: Colors.white,
  },
  lottie: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  placeholderEmoji: {
    fontSize: 36,
  },
  placeholderText: {
    fontSize: FontSize.sm,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  placeholderSubtext: {
    fontSize: FontSize.xs,
    color: Colors.textMuted,
  },
});
