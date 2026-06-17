import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/colors';
import { FontSize, Spacing } from '@/constants/spacing';
import { LocationInfo } from '@/types';

interface LocationBarProps {
  location: LocationInfo;
  onPress?: () => void;
  onAvatarPress?: () => void;
}

export function LocationBar({ location, onPress, onAvatarPress }: LocationBarProps) {
  return (
    // Background is the app lavender — no extra card, it blends into SafeAreaView
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftSection} onPress={onPress} activeOpacity={0.7}>
        {/* ⚡ ETA headline */}
        <View style={styles.etaRow}>
          <Ionicons name="flash" size={17} color={Colors.textPrimary} />
          <Text style={styles.etaText}>{location.etaMinutes} minutes</Text>
        </View>
        {/* Address + chevron */}
        <View style={styles.addressRow}>
          <Text style={styles.address} numberOfLines={1}>
            {location.label} - {location.address}
          </Text>
          <Ionicons name="chevron-down" size={13} color={Colors.textSecondary} />
        </View>
      </TouchableOpacity>

      {/* Avatar — solid dark circle like Zepto */}
      <TouchableOpacity
        style={styles.avatar}
        onPress={onAvatarPress}
        activeOpacity={0.75}
      >
        <Ionicons name="person" size={18} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.xs,
    // background is inherited from SafeAreaView (lavender)
  },
  leftSection: {
    flex: 1,
    marginRight: Spacing.md,
  },
  etaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  etaText: {
    fontSize: FontSize.xxl,
    fontWeight: '800',
    color: Colors.textPrimary,
    letterSpacing: -0.3,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    marginTop: 2,
  },
  address: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    flex: 1,
    paddingLeft: 2
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: Colors.textPrimary,   // solid dark circle
    alignItems: 'center',
    justifyContent: 'center',
  },
});