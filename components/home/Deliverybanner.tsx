import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/colors';
import { FontSize, Radius, Spacing } from '@/constants/spacing';

interface DeliveryBannerProps {
  threshold?: number;
  onPress?: () => void;
}

const SHINE_WIDTH = 90;

export function DeliveryBanner({ threshold = 99, onPress }: DeliveryBannerProps) {
  const [cardWidth, setCardWidth] = useState(0);
  const shineAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.delay(1800),
        Animated.timing(shineAnim, {
          toValue: 1,
          duration: 1100,
          useNativeDriver: true,
        }),
        Animated.timing(shineAnim, { toValue: 0, duration: 0, useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [shineAnim]);

  const travelDistance = cardWidth + SHINE_WIDTH * 2;
  const translateX = shineAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-SHINE_WIDTH * 2, travelDistance],
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.85}
      onLayout={(e) => setCardWidth(e.nativeEvent.layout.width)}
    >
      {cardWidth > 0 && (
        <Animated.View
          pointerEvents="none"
          style={[styles.shine, { transform: [{ translateX }, { rotate: '20deg' }] }]}
        >
          <LinearGradient
            colors={['transparent', 'rgba(255,255,255,0.22)', 'transparent']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.shineGradient}
          />
        </Animated.View>
      )}

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
    marginVertical: Spacing.xxl,
    backgroundColor: '#1A1A2E',
    borderRadius: Radius.lg,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
    overflow: 'hidden',
    position: 'relative',
  },
  shine: {
    position: 'absolute',
    top: -30,
    bottom: -30,
    width: SHINE_WIDTH,
  },
  shineGradient: {
    flex: 1,
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