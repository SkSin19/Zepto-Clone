import { Image } from 'expo-image';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/colors';
import { FontSize, Radius, Spacing } from '@/constants/spacing';
import { Category } from '@/types';

interface CategoryGridProps {
  title: string;
  categories: Category[];
  onSelectCategory?: (category: Category) => void;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');
// 4 columns, with padding and gaps
const TILE_SIZE = (SCREEN_WIDTH - Spacing.lg * 2 - Spacing.sm * 3) / 4;

export function CategoryGrid({ title, categories, onSelectCategory }: CategoryGridProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>

      {/* Render in rows of 4 */}
      <View style={styles.grid}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={styles.tile}
            onPress={() => onSelectCategory?.(cat)}
            activeOpacity={0.75}
          >
            <View style={styles.imageWrapper}>
              <Image
                source={{ uri: cat.iconUrl }}
                style={styles.image}
                contentFit="cover"
                transition={150}
              />
            </View>
            <Text style={styles.label} numberOfLines={2}>
              {cat.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.xl,
    paddingHorizontal: Spacing.lg,
  },
  sectionTitle: {
    fontSize: FontSize.xxl,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Spacing.md + 5,
    alignSelf: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  tile: {
    width: TILE_SIZE,
    alignItems: 'center',
  },
  imageWrapper: {
    width: TILE_SIZE,
    height: TILE_SIZE,
    borderRadius: Radius.md,
    overflow: 'hidden',
    backgroundColor: Colors.surface,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  label: {
    fontSize: FontSize.xs,
    color: Colors.textPrimary,
    textAlign: 'center',
    marginTop: 6,
    fontWeight: '500',
    lineHeight: 15,
  },
});