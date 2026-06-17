import { Image } from 'expo-image';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/colors';
import { FontSize, Spacing } from '@/constants/spacing';
import { Category } from '@/types';

interface CategoryRowProps {
  categories: Category[];
  onSelectCategory?: (category: Category) => void;
}

const ICON_SIZE = 56;

export function CategoryRow({ categories, onSelectCategory }: CategoryRowProps) {
  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContent}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          activeOpacity={0.7}
          onPress={() => onSelectCategory?.(item)}
        >
          <View style={styles.iconWrapper}>
            <Image source={{ uri: item.iconUrl }} style={styles.icon} contentFit="cover" transition={150} />
          </View>
          <Text style={styles.label} numberOfLines={2}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: Spacing.lg,
    gap: Spacing.lg,
    paddingVertical: Spacing.sm,
  },
  item: {
    alignItems: 'center',
    width: 64,
  },
  iconWrapper: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE / 2,
    overflow: 'hidden',
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  label: {
    fontSize: FontSize.xs,
    color: Colors.textPrimary,
    textAlign: 'center',
    marginTop: Spacing.xs,
  },
});
