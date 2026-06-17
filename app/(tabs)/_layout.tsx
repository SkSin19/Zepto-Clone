import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/colors';

const ACTIVE_TINT = '#E0207A';
const INACTIVE_TINT = '#8E8E93';

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarActiveTintColor: ACTIVE_TINT,
          tabBarInactiveTintColor: INACTIVE_TINT,
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.label,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Ionicons name="home" size={22} color={color} />,
          }}
        />
        <Tabs.Screen
          name="categories"
          options={{
            title: 'Categories',
            tabBarIcon: ({ color }) => <Ionicons name="grid-outline" size={22} color={color} />,
          }}
        />
        <Tabs.Screen
          name="trending"
          options={{
            title: 'Trending',
            tabBarIcon: ({ color }) => (
              <Ionicons name="trending-up-outline" size={22} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="deals"
          options={{
            title: 'Deals',
            tabBarIcon: ({ color }) => <Ionicons name="pricetag" size={22} color={color} />,
          }}
        />
      </Tabs>

      {/* Promo slot — drop your own sponsor/brand image here. */}
      <View style={styles.promoBadge} pointerEvents="none" />
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 64,
    paddingTop: 6,
     backgroundColor: "#ffffff", 
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
  },
  promoBadge: {
    position: 'absolute',
    top: -22,
    right: 12,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E5E5EA',
  },
});