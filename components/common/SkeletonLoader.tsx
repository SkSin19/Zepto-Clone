import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View, ViewStyle } from 'react-native';
import { Colors } from '@/constants/colors';
import { Radius } from '@/constants/spacing';

interface SkeletonBoxProps {
  width: number | `${number}%`;
  height: number;
  borderRadius?: number;
  style?: ViewStyle;
}

/**
 * A single shimmering placeholder box. Compose several of these to
 * build skeleton layouts (e.g. a product card skeleton = image box +
 * two text-line boxes).
 */
export function SkeletonBox({ width, height, borderRadius = Radius.sm, style }: SkeletonBoxProps) {
  const opacity = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.4,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [opacity]);

  return (
    <Animated.View
      style={[
        styles.box,
        { width, height, borderRadius, opacity },
        style,
      ]}
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <View style={styles.card}>
      <SkeletonBox width="100%" height={90} borderRadius={Radius.md} />
      <SkeletonBox width="80%" height={12} style={styles.line} />
      <SkeletonBox width="50%" height={12} style={styles.line} />
      <SkeletonBox width="100%" height={28} borderRadius={Radius.sm} style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: Colors.border,
  },
  card: {
    width: 120,
    padding: 8,
  },
  line: {
    marginTop: 8,
  },
});
