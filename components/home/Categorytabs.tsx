//the category selection below the search bar

import { Image } from 'expo-image';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/colors';
import { FontSize, Spacing } from '@/constants/spacing';
import { Category } from '@/types';

interface CategoryTabsProps {
  categories: Category[];
  onSelectCategory?: (category: Category | null) => void;
}

const ALL_TAB = { id: 'all', name: 'All', iconUrl: '', emoji: '🛍️' };

type Tab = typeof ALL_TAB;

export function CategoryTabs({ categories, onSelectCategory }: CategoryTabsProps) {
  const [activeId, setActiveId] = useState<string>('all');

  const tabs: Tab[] = [ALL_TAB, ...categories.map((c) => ({ ...c, emoji: undefined as any }))];

  const handlePress = (tab: Tab) => {
    setActiveId(tab.id);
    onSelectCategory?.(tab.id === 'all' ? null : (tab as any));
  };

  return (
    // Sits directly on lavender bg — no separate background needed
    <FlatList
      data={tabs}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContent}
      renderItem={({ item }) => {
        const isActive = item.id === activeId;
        return (
          <TouchableOpacity
            style={styles.tab}
            onPress={() => handlePress(item)}
            activeOpacity={0.7}
          >
            {/* Icon bubble — white card on lavender */}
            <View style={[styles.iconWrapper, isActive && styles.iconWrapperActive]}>
              {item.iconUrl ? (
                <Image
                  source={{ uri: item.iconUrl }}
                  style={styles.icon}
                  contentFit="cover"
                  transition={150}
                />
              ) : (
                <Text style={styles.emoji}>{(item as any).emoji ?? '🛍️'}</Text>
              )}
            </View>

            <Text style={[styles.label, isActive && styles.labelActive]}>
              {item.name}
            </Text>

            {/* Active indicator: solid purple underline */}
            {isActive && <View style={styles.underline} />}
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: Spacing.lg,
    gap: 0,
    paddingBottom: 0,
    backgroundColor: Colors.background,
  },
  tab: {
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.sm,
    minWidth: 58,
    position: 'relative',
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: Colors.surface,   // white bubble on lavender
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 1,
  },
  iconWrapperActive: {
    backgroundColor: Colors.primary,   // solid purple when active
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  emoji: {
    fontSize: 24,
  },
  label: {
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
    marginTop: 5,
    fontWeight: '500',
  },
  labelActive: {
    color: Colors.primary,
    fontWeight: '700',
  },
  underline: {
    position: 'absolute',
    bottom: 0,
    left: 2,
    right: 2,
    height: 4,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "#000000",
  },
});