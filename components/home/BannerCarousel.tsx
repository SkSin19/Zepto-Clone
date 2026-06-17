//banners under the everyday low prices section

import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/colors';
import { FontSize, Radius, Spacing } from '@/constants/spacing';
import { useAutoScroll } from '@/hooks/useAutoScroll';
import { Banner } from '@/types';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH - Spacing.lg * 2;
const CARD_HEIGHT = 200;

interface BannerCarouselProps {
  banners: Banner[];
}

export function BannerCarousel({ banners }: BannerCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const { listRef, onScrollBeginDrag, onScrollEndDrag, onViewableItemsChanged } = useAutoScroll({
    itemCount: banners.length,
    intervalMs: 3500,
  });

  const handleViewableChanged = (info: Parameters<typeof onViewableItemsChanged>[0]) => {
    onViewableItemsChanged(info);
    if (info.viewableItems.length > 0 && info.viewableItems[0].index !== null) {
      setActiveIndex(info.viewableItems[0].index);
    }
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        ref={listRef}
        data={banners}
        horizontal
        pagingEnabled
        snapToAlignment='center'
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onScrollBeginDrag={onScrollBeginDrag}
        onScrollEndDrag={onScrollEndDrag}
        onViewableItemsChanged={handleViewableChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 60 }}
        getItemLayout={(_, index) => ({
          length: CARD_WIDTH + Spacing.sm,
          offset: (CARD_WIDTH + Spacing.sm) * index,
          index,
        })}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} contentFit="cover" transition={200} />
            <View style={styles.textOverlay}>
              <Text style={styles.title}>{item.title}</Text>
              {item.subtitle ? <Text style={styles.subtitle}>{item.subtitle}</Text> : null}
            </View>
          </View>
        )}
      />
      <View style={styles.dotsContainer}>
        {banners.map((banner, index) => (
          <View
            key={banner.id}
            style={[styles.dot, index === activeIndex && styles.dotActive]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Spacing.sm,
  },
  listContent: {
    paddingHorizontal: Spacing.lg,
    gap: Spacing.sm,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: Radius.lg,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 1,
  },
  textOverlay: {
    padding: Spacing.lg,
  },
  title: {
    fontSize: FontSize.xl,
    fontWeight: '800',
    color: Colors.textPrimary,
  },
  subtitle: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginTop: Spacing.sm,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.border,
  },
  dotActive: {
    backgroundColor: Colors.primary,
    width: 18,
  },
});
