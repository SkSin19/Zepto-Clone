import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/colors';
import { FontSize, Radius, Spacing } from '@/constants/spacing';

interface DeliveryBannerProps {
  threshold?: number;
  onPress?: () => void;
}

export function DeliveryBanner({ threshold = 99, onPress }: DeliveryBannerProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.iconWrapper}>
        <Ionicons name="bicycle" size={18} color={Colors.white} />
      </View>
      <View style={styles.textBlock}>
        <Text style={styles.headline}>Unlock free delivery</Text>
        <Text style={styles.sub}>Shop for ₹{threshold}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Spacing.lg,
    marginVertical: Spacing.sm,
    backgroundColor: '#1A1A2E',
    borderRadius: Radius.lg,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
  },
  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBlock: {
    flex: 1,
  },
  headline: {
    fontSize: FontSize.md,
    fontWeight: '700',
    color: Colors.white,
  },
  sub: {
    fontSize: FontSize.xs,
    color: 'rgba(255,255,255,0.65)',
    marginTop: 1,
  },
});