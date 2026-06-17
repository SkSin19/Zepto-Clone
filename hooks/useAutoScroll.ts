import { useEffect, useRef } from 'react';
import { FlatList, ViewToken } from 'react-native';

interface UseAutoScrollOptions {
  itemCount: number;
  intervalMs?: number;
  enabled?: boolean;
}

/**
 * Drives an auto-advancing FlatList (e.g. a banner carousel).
 * Pauses automatically when the user is actively touching the list,
 * and resumes after — so it never fights a manual swipe mid-gesture.
 */
export function useAutoScroll({ itemCount, intervalMs = 3000, enabled = true }: UseAutoScrollOptions) {
  const listRef = useRef<FlatList>(null);
  const currentIndexRef = useRef(0);
  const isUserInteracting = useRef(false);

  useEffect(() => {
    if (!enabled || itemCount <= 1) return;

    const timer = setInterval(() => {
      if (isUserInteracting.current) return;

      const nextIndex = (currentIndexRef.current + 1) % itemCount;
      currentIndexRef.current = nextIndex;

      listRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [itemCount, intervalMs, enabled]);

  const onScrollBeginDrag = () => {
    isUserInteracting.current = true;
  };

  const onScrollEndDrag = () => {
    isUserInteracting.current = false;
  };

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index !== null) {
        currentIndexRef.current = viewableItems[0].index;
      }
    }
  ).current;

  return {
    listRef,
    onScrollBeginDrag,
    onScrollEndDrag,
    onViewableItemsChanged,
  };
}
