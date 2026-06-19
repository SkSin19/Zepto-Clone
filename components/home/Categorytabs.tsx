//the category selection below the search bar

import { Image } from "expo-image";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "@/constants/colors";
import { FontSize, Spacing } from "@/constants/spacing";
import { Category } from "@/types";
import Svg, { Path } from "react-native-svg";

interface CategoryTabsProps {
  categories: Category[];
  onSelectCategory?: (category: Category | null) => void;
  themeColor?: string; // Optional theme color for the active tab
}

const ALL_TAB = { id: "all", name: "All", iconUrl: "", emoji: "🛍️" };

type Tab = typeof ALL_TAB;

export function CategoryTabs({
  categories,
  onSelectCategory,
  themeColor,
}: CategoryTabsProps) {
  const [activeId, setActiveId] = useState<string>("all");

  const tabs: Tab[] = [
    ALL_TAB,
    ...categories.map((c) => ({ ...c, emoji: undefined as any })),
  ];

  const handlePress = (tab: Tab) => {
    setActiveId(tab.id);
    onSelectCategory?.(tab.id === "all" ? null : (tab as any));
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
            activeOpacity={0.8}
          >
            {isActive && (
              <Svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                style={StyleSheet.absoluteFillObject}
              >
                <Path
                  d="
                  M 12 12
                  Q 12 0 24 0
                  L 76 0
                  Q 88 0 88 12
                  L 100 100
                  L 0 100
                  Z
                "
                  fill="rgba(1,46,73,0.85)"
                />

                <Path
                  d="
                M 12 12
                Q 12 0 24 0
                L 76 0
                Q 88 0 88 12
                L 100 100
              "
                  fill="none"
                  stroke="rgba(255,255,255,0.9)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            )}

            <View
              style={[styles.iconWrapper, isActive && styles.iconWrapperActive]}
            >
              {item.iconUrl ? (
                <Image
                  source={{ uri: item.iconUrl }}
                  style={styles.icon}
                  contentFit="cover"
                  transition={150}
                />
              ) : (
                <Text style={styles.emoji}>{(item as any).emoji ?? "🛍️"}</Text>
              )}
            </View>

            <Text style={[styles.label, isActive && styles.labelActive]}>
              {item.name}
            </Text>
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
    marginBottom: -Spacing.sm,
    backgroundColor: Colors.christmasBg,
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 105,
    marginHorizontal: 4,
    position: "relative",

    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: "hidden", // important
  },

  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: Colors.surface,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  iconWrapperActive: {
    backgroundColor: "transparent",
  },

  label: {
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
    marginTop: 6,
    fontWeight: "500",
  },

  labelActive: {
    color: "#ffffff",
    fontWeight: "700",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  emoji: {
    fontSize: 24,
  },
});
