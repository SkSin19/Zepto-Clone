import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/colors';
import { FontSize, Radius, Spacing } from '@/constants/spacing';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onAdd?: (product: Product) => void;
}

// Zepto cards are narrower — 3 visible at once in the grid
const CARD_WIDTH = 130;

export function ProductCard({ product, onAdd }: ProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <View style={styles.card}>
      {/* Image + overlays */}
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: product.imageUrl }}
          style={styles.image}
          contentFit="cover"
          transition={150}
        />

        {/* Heart (wishlist) */}
        <TouchableOpacity
          style={styles.heartButton}
          onPress={() => setWishlisted((v) => !v)}
          activeOpacity={0.7}
          hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
        >
          <Ionicons
            name={wishlisted ? 'heart' : 'heart-outline'}
            size={18}
            color={wishlisted ? Colors.danger : Colors.textMuted}
          />
        </TouchableOpacity>

        {/* ADD button at bottom of image */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => onAdd?.(product)}
          activeOpacity={0.85}
        >
          <Text style={styles.addButtonText}>ADD</Text>
          <Ionicons name="add" size={14} color={Colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Price badge row */}
      <View style={styles.priceRow}>
        <View style={styles.priceBadge}>
          <Text style={styles.priceText}>₹{product.price}</Text>
        </View>
        {product.mrp ? (
          <Text style={styles.mrp}>₹{product.mrp}</Text>
        ) : null}
      </View>

      {/* Discount label */}
      {product.discountPercent ? (
        <Text style={styles.discountLabel}>₹{product.mrp! - product.price} OFF</Text>
      ) : null}

      {/* Product name */}
      <Text style={styles.name} numberOfLines={2}>
        {product.name}
      </Text>

      {/* Unit + delivery */}
      <Text style={styles.unit}>{product.unit}</Text>

      {/* Category tag (variant/tag) — shown if provided */}
      {(product as any).tag ? (
        <View style={styles.tagPill}>
          <Text style={styles.tagText}>{(product as any).tag}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    backgroundColor: Colors.white,
  },
  imageWrapper: {
    width: '100%',
    height: 130,
    borderRadius: Radius.md,
    overflow: 'hidden',
    backgroundColor: Colors.surface,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  heartButton: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: Colors.white,
    borderRadius: 999,
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    elevation: 2,
  },
  addButton: {
    position: 'absolute',
    bottom: 6,
    left: 6,
    right: 6,
    backgroundColor: Colors.white,
    borderRadius: Radius.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    gap: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  addButtonText: {
    color: Colors.primary,
    fontSize: FontSize.sm,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 8,
  },
  priceBadge: {
    backgroundColor: Colors.success,
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  priceText: {
    color: Colors.white,
    fontSize: FontSize.sm,
    fontWeight: '700',
  },
  mrp: {
    fontSize: FontSize.xs,
    color: Colors.textMuted,
    textDecorationLine: 'line-through',
  },
  discountLabel: {
    fontSize: FontSize.xs,
    color: Colors.danger,
    fontWeight: '700',
    marginTop: 2,
  },
  name: {
    fontSize: FontSize.sm,
    color: Colors.textPrimary,
    fontWeight: '500',
    marginTop: 4,
    lineHeight: 18,
  },
  unit: {
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  tagPill: {
    marginTop: 4,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  tagText: {
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
  },
});