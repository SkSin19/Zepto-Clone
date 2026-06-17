import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BannerCarousel } from '@/components/home/BannerCarousel';
import { CategoryGrid } from '@/components/home/Categorygrid';
import { CategoryTabs } from '@/components/home/Categorytabs';
import { DeliveryBanner } from '@/components/home/Deliverybanner';
import { FestiveSection } from '@/components/home/FestiveSection';
import { HeroBanner } from '@/components/home/Herobanner';
import { LocationBar } from '@/components/home/LocationBar';
import { ProductSectionList } from '@/components/home/ProductGrid';
import { SearchBar } from '@/components/home/SearchBar';
import { Colors } from '@/constants/colors';
import { Spacing } from '@/constants/spacing';
import { banners } from '@/data/banners';
import { groceryCategories, tabCategories } from '@/data/categories';
import { productSections } from '@/data/products';
import { Product } from '@/types';

// ─── Mock data ─────────────────────────────────────────────────────────────────
const currentLocation = {
  label: 'Mulayam Nagar',
  address: 'Mulayam Nagar, Luck...',
  etaMinutes: 5,
};

// Drop your real Lottie file at assets/lottie/train.json and uncomment:
const trainLottie = require('@/assets/lottie/train.json');

// ─── Screen ────────────────────────────────────────────────────────────────────
export default function HomeScreen() {
  const handleAddProduct = (product: Product) => {
    console.log('Added to cart:', product.name);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      {/* ── Sticky top ── */}
      <LocationBar location={currentLocation} />
      <SearchBar />

      {/* ── Scrollable body ── */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* 1. Category tab strip (All / Fresh / Electronics …) */}
        <CategoryTabs categories={tabCategories} />

        {/* Divider */}
        <View style={styles.divider} />

        {/* 2. Hero banner ("EVERYDAY LOW PRICES!") */}
        <HeroBanner />

        {/* 3. Banner carousel */}
        <View style={styles.carouselWrapper}>
          <BannerCarousel banners={banners} />
        </View>

        {/* 4. "Trending Near You" product section */}
        <View style={styles.sectionGap}>
          <ProductSectionList
            section={{ ...productSections[0], title: 'Trending Near' }}
            accentSectionTitle="You"
            onAddProduct={handleAddProduct}
          />
        </View>

        {/* 5. Delivery unlock nudge */}
        <DeliveryBanner threshold={99} />

        {/* 6. Christmas / Festive section with train animation */}
        <FestiveSection lottieSource={trainLottie} />

        {/* 7. Grocery & Kitchen category grid */}
        <CategoryGrid
          title="Grocery & Kitchen"
          categories={groceryCategories}
        />

        {/* 8. More product sections */}
        {productSections.slice(1).map((section) => (
          <View key={section.id} style={styles.sectionGap}>
            <ProductSectionList section={section} onAddProduct={handleAddProduct} />
          </View>
        ))}

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingBottom: Spacing.xxxl,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginHorizontal: Spacing.lg,
  },
  carouselWrapper: {
    marginTop: Spacing.md,
  },
  sectionGap: {
    marginTop: Spacing.xs,
  },
  bottomSpacer: {
    height: 40,
  },
});