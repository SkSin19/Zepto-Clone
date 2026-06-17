import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/colors';
import { FontSize, Radius, Spacing } from '@/constants/spacing';

interface SearchBarProps {
  placeholder?: string;
  onPress?: () => void;
  promoPillLabel?: string;
  promoPillImageUrl?: string;
  onPromoPillPress?: () => void;
}

export function SearchBar({
  placeholder = 'Search for "Milk"',
  onPress,
  promoPillLabel = 'Pet\nStore',
  promoPillImageUrl = "https://imgs.search.brave.com/DxT1PO_L-jQkFTa6_EO1R6It5HTHZD70vrMftqiR5q4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDI1MTIyMi9vdXJt/aWQvcG5ndHJlZS1w/ZXQtZm9vZC1ib3ds/LWJhZy1jYW5zLWFu/ZC1ib3gtb24td2hp/dGUtcGxhdGZvcm0t/cG5nLWltYWdlXzE4/MjkzMzg5LndlYnA",
  onPromoPillPress,
}: SearchBarProps) {
  return (
    // Sits on the lavender background — white input card floats above it
    <View style={styles.row}>
      <TouchableOpacity style={styles.inputContainer} onPress={onPress} activeOpacity={0.8}>
        <Ionicons name="search" size={18} color={Colors.textMuted} />
        <Text style={styles.placeholder}>{placeholder}</Text>
      </TouchableOpacity>

      {/* Pet Store / promo pill — white card with purple border */}
      <TouchableOpacity style={styles.pill} onPress={onPromoPillPress} activeOpacity={0.8}>
        <Text style={styles.pillLabel}>{promoPillLabel}</Text>
        {promoPillImageUrl ? (
          <Image source={{ uri: promoPillImageUrl }} style={styles.pillImage} contentFit="cover" />
        ) : (
          <View style={styles.pillImagePlaceholder}>
            <Text style={{ fontSize: 20 }}>🐾</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    gap: Spacing.sm,
    backgroundColor: Colors.background,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,     // WHITE card on lavender bg
    paddingHorizontal: Spacing.md,
    paddingVertical: 15,
    borderRadius: Radius.md,
    gap: Spacing.sm,
  },
  placeholder: {
    fontSize: FontSize.md + 2,
    color: Colors.textMuted,
    flex: 1,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,     // white card
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 8,
    gap: 4,
    minWidth: 74,
    justifyContent: 'center',
  },
  pillLabel: {
    fontSize: FontSize.md,
    fontWeight: '800',
    color: Colors.primary,
    lineHeight: 14,
    alignItems: "flex-start",
    textAlign: "left"
  },
  pillImage: {
    width: 34,
    height: 34,
    borderRadius: 6,
  },
  pillImagePlaceholder: {
    width: 34,
    height: 34,
    borderRadius: 6,
    backgroundColor: Colors.surfaceDim,
    alignItems: 'center',
    justifyContent: 'center',
  },
});