// the section witht the train animation

import LottieView from 'lottie-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, LayoutChangeEvent, Platform, StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/colors';
import { FontSize, Spacing } from '@/constants/spacing';

interface FestiveSectionProps {
  lottieSource?: any;
}

const FALLBACK_ASPECT_RATIO = 2.4;

const TOP_CROP_RATIO = 0.35;

export function FestiveSection({ lottieSource }: FestiveSectionProps) {
  const [sceneWidth, setSceneWidth] = useState(0);
  const float = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(float, { toValue: 1, duration: 2400, useNativeDriver: true }),
        Animated.timing(float, { toValue: 0, duration: 2400, useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [float]);

  const translateY = float.interpolate({ inputRange: [0, 1], outputRange: [0, -7] });
  const glowOpacity = float.interpolate({ inputRange: [0, 1], outputRange: [0.75, 1] });

  const aspectRatio =
    lottieSource?.w && lottieSource?.h ? lottieSource.w / lottieSource.h : FALLBACK_ASPECT_RATIO;

  const fullHeight = sceneWidth ? sceneWidth / aspectRatio : 0;
  const visibleHeight = fullHeight * (1 - TOP_CROP_RATIO);

  const handleLayout = (e: LayoutChangeEvent) => {
    setSceneWidth(e.nativeEvent.layout.width);
  };

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[styles.merryChristmas, { transform: [{ translateY }], opacity: glowOpacity }]}
      >
        Merry Christmas
      </Animated.Text>

      <View
        style={[styles.sceneWrapper, { height: visibleHeight }]}
        onLayout={handleLayout}
      >
        {lottieSource && fullHeight > 0 ? (
          <LottieView
            source={lottieSource}
            autoPlay
            loop
            style={{
              width: sceneWidth,
              height: fullHeight,
              marginTop: -fullHeight * TOP_CROP_RATIO,
            }}
          />
        ) : (
          <View style={[styles.placeholder, { height: visibleHeight }]}>
            <Text style={styles.placeholderEmoji}>🚂</Text>
            <Text style={styles.placeholderText}>
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
    marginTop: Spacing.xxxl,
    marginBottom: Spacing.xl,
    width: '100%',
    alignItems: 'center',
  },
  merryChristmas: {
    fontSize: FontSize.xl + 16,
    lineHeight: FontSize.xl + 16,
    fontWeight: '800',
    fontFamily: Platform.select({ ios: 'Georgia', android: 'serif', default: 'serif' }),
    color: '#46acff',
    letterSpacing: 3,
    marginBottom: -6,
    includeFontPadding: false,
    textShadowColor: 'rgba(186, 224, 255, 0.95)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 16,
  },
  sceneWrapper: {
    width: '100%',
    overflow: 'hidden',
  },
  placeholder: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  placeholderEmoji: {
    fontSize: 36,
  },
  placeholderText: {
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
  },
});