import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SectionHeader } from './Sectionheader';
import { Colors } from '@/constants/colors';
import { FontSize, Radius, Spacing } from '@/constants/spacing';
import { Product, ProductSection } from '@/types';
import { ProductCard } from './ProductCard';

interface ProductSectionListProps {
  section: ProductSection;
  /** Optional purple-accented second part of the title, e.g. "You" → "Trending Near You" */
  accentSectionTitle?: string;
  onAddProduct?: (product: Product) => void;
  onSeeAll?: (section: ProductSection) => void;
}

/** Terminal "See All →" card appended after real product cards */
function SeeAllCard({ onPress }: { onPress?: () => void }) {
  return (
    <TouchableOpacity style={styles.seeAllCard} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.seeAllCircle}>
        <Ionicons name="arrow-forward" size={22} color={Colors.white} />
      </View>
      <Text style={styles.seeAllText}>See All</Text>
    </TouchableOpacity>
  );
}

export function ProductSectionList({
  section,
  accentSectionTitle,
  onAddProduct,
  onSeeAll,
}: ProductSectionListProps) {
  return (
    <View style={styles.container}>
      <SectionHeader
        title={section.title}
        accentTitle={accentSectionTitle}
        showSeeAll
        onSeeAll={() => onSeeAll?.(section)}
      />
      <FlatList
        data={section.products}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListFooterComponent={<SeeAllCard onPress={() => onSeeAll?.(section)} />}
        renderItem={({ item }) => (
          <ProductCard product={item} onAdd={onAddProduct} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.xl,
  },
  listContent: {
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
    paddingBottom: 4,
  },
  seeAllCard: {
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
  },
  seeAllCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  seeAllText: {
    fontSize: FontSize.sm,
    fontWeight: '700',
    color: Colors.primary,
  },
});