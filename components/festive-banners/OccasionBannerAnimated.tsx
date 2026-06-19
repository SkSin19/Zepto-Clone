/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import { Image } from "expo-image";
import LottieView from "lottie-react-native";
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  withDelay,
  withSequence,
  withRepeat,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";

interface OccasionBannerAnimatedProps {
  occasion: any;
  bannerImage: any;
  centerAnimation: any;
  offers?: string[];
  offerCardColor?: string;
  occasionThemeColor: string;
  occasionText1?: string;
  occasionText2?: string;
  tagLine?: string;
}

interface AnimatedLetterProps {
  char: string;
  index: number;
  direction: "left" | "right";
  totalDelay: number;
  color?: string;
  fontSize: number;
}

const AnimatedLetter = ({
  char,
  index,
  direction,
  totalDelay,
  color = "#ffffff",
  fontSize,
}: AnimatedLetterProps) => {
  const { width } = useWindowDimensions();

  const startX = direction === "left" ? -width : width;
  const translateX = useSharedValue(startX);
  const opacity = useSharedValue(0);
  const rotate = useSharedValue(direction === "left" ? -28 : 28);

  const slideDelay = totalDelay + index * 180;
  const wobbleStart = totalDelay + 9 * 180 + 1000 + index * 80;

  useEffect(() => {
    translateX.value = withDelay(
      slideDelay,
      withSpring(0, {
        mass: 0.7,
        damping: 11,
        stiffness: 90,
        overshootClamping: false,
      }),
    );

    opacity.value = withDelay(
      slideDelay,
      withTiming(1, { duration: 180, easing: Easing.out(Easing.quad) }),
    );

    rotate.value = withDelay(
      slideDelay,
      withSequence(
        withTiming(direction === "left" ? -14 : 14, { duration: 80 }),
        withSpring(0, { mass: 0.5, damping: 7, stiffness: 120 }),
        withTiming(0, { duration: wobbleStart - slideDelay }),
      ),
    );

    rotate.value = withDelay(
      wobbleStart,
      withRepeat(
        withSequence(
          withTiming(direction === "left" ? -7 : 7, {
            duration: 600,
            easing: Easing.inOut(Easing.sin),
          }),
          withTiming(direction === "left" ? 5 : -5, {
            duration: 600,
            easing: Easing.inOut(Easing.sin),
          }),
          withTiming(0, {
            duration: 500,
            easing: Easing.inOut(Easing.sin),
          }),
          withTiming(0, { duration: 800 }),
        ),
        -1,
        false,
      ),
    );
  }, []);

  const animStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { rotate: `${rotate.value}deg` },
    ],
    opacity: opacity.value,
  }));

  return (
    <Animated.Text style={[styles.letterBase, animStyle, { color, fontSize }]}>
      {char === " " ? "\u00A0" : char}
    </Animated.Text>
  );
};

interface LetterRowProps {
  text: string;
  direction: "left" | "right";
  baseDelay?: number;
  color?: string;
  style?: object;
  fontSize: number;
}

const LetterRow = ({
  text,
  direction,
  baseDelay = 300,
  color,
  style,
  fontSize,
}: LetterRowProps) => {
  return (
    <View style={[styles.letterRow, style]}>
      {text.split("").map((char, i) => (
        <AnimatedLetter
          key={i}
          char={char}
          index={i}
          direction={direction}
          totalDelay={baseDelay}
          color={color}
          fontSize={fontSize}
        />
      ))}
    </View>
  );
};

interface GlassCardProps {
  offer: string;
  accentColor?: string;
  width: number;
}

const GlassCard = ({
  offer,
  accentColor = "#79ceff",
  width,
}: GlassCardProps) => {
  const hex = accentColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return (
    <View
      style={[
        styles.glassCardOuter,
        { backgroundColor: `rgba(${r},${g},${b},0.72)`, width },
      ]}
    >
      <Text style={styles.glassOfferText}>{offer}</Text>
    </View>
  );
};

const OccasionBannerAnimated = ({
  occasion,
  bannerImage,
  centerAnimation,
  offers,
  offerCardColor,
  occasionThemeColor,
  occasionText1,
  occasionText2,
  tagLine,
}: OccasionBannerAnimatedProps) => {
  const { height, width } = useWindowDimensions();
  const dynamicFontSize = Math.min(48, Math.max(40, Math.round(width * 0.092)));
  const cardWidth = width / 3.3;

  return (
    <View style={[styles.container, { height: height * 0.35 }]}>
      <Image
        style={[styles.bannerBgImage, { height: height * 0.35 }]}
        source={bannerImage}
        contentFit="cover"
      />

      <LottieView
        style={[
          styles.centerAnimation,
          { height: height * 0.18, width: width * 0.45 },
        ]}
        source={centerAnimation}
        autoPlay
        loop
      />

      <View style={styles.tagLineWrapper}>
        <View style={styles.dividerLeft}></View>
        {tagLine && <Text style={styles.tagLine}>{tagLine}</Text>}
        <View style={styles.dividerRight}></View>
      </View>

      {occasionText1 && (
        <LetterRow
          text={occasionText1}
          direction="left"
          baseDelay={150}
          color="#ffffff"
          fontSize={dynamicFontSize}
          style={styles.textLeft}
        />
      )}

      {occasionText2 && (
        <LetterRow
          text={occasionText2}
          direction="right"
          baseDelay={150}
          color="#ffffff"
          fontSize={dynamicFontSize}
          style={styles.textRight}
        />
      )}

      <FlatList
        style={styles.offerCardRow} // position, bottom, left, right
        contentContainerStyle={styles.offerCardContent} // alignItems, padding, flexGrow
        data={offers}
        horizontal
        snapToInterval={cardWidth + 6}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <GlassCard
            offer={item}
            accentColor={offerCardColor}
            width={cardWidth}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ width: 6 }} />}
        scrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  bannerBgImage: {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  tagLineWrapper: {
    position: "absolute",
    top: "27%",
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tagLine: {
    color: "#ffffff",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 12,
    letterSpacing: 0.3,
    textShadowColor: "rgba(0,0,0,0.4)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  dividerLeft: {
    height: 2,
    backgroundColor: "#ffffff",
    width: 50,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },

  dividerRight: {
    height: 2,
    backgroundColor: "#ffffff",
    width: 50,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },

  centerAnimation: {
    marginTop: 60,
  },

  // ── Letters ──
  letterRow: {
    flexDirection: "row",
    position: "absolute",
  },
  textLeft: {
    left: "10%",
    top: "10%",
  },
  textRight: {
    right: "10%",
    top: "10%",
  },
  letterBase: {
    fontWeight: "900",
    letterSpacing: 2,
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 6,
  },

  offerCardRow: {
    position: "absolute", // ← this stays on `style`, not contentContainerStyle
    bottom: 0, //   since position/top/left/right are outer frame props
    left: 10,
    right: 10,
  },
  offerCardContent: {
    // ← new, goes on contentContainerStyle
    flexGrow: 1,
    alignItems: "stretch",
    paddingHorizontal: 8,
  },
  glassCardOuter: {
    flex: 1,
    minHeight: 88, // taller than before
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0, // no outer card rounding — sits flush at bottom
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    padding: 12,
  },
  glassOfferText: {
    color: "#ffffff",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 12,
    letterSpacing: 0.3,
    textShadowColor: "rgba(0,0,0,0.4)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
});

export default OccasionBannerAnimated;
