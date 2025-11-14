<template>
  <div ref="container" class="stagger-in-container">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";

interface Props {
  delay?: number;
  stagger?: number;
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0,
  stagger: 100,
});

const container = ref<HTMLElement | null>(null);
const hasAnimated = ref(false);

const findAnimateableElements = (el: HTMLElement): HTMLElement[] => {
  const elements: HTMLElement[] = [];
  
  // First, try to find grid items (most common)
  const gridItems = el.querySelectorAll('.grid > *');
  if (gridItems.length > 0) {
    return Array.from(gridItems) as HTMLElement[];
  }
  
  // Then try space-y containers (check all possible space-y values)
  const spaceYSelectors = [
    '[class*="space-y-1"] > *',
    '[class*="space-y-2"] > *',
    '[class*="space-y-3"] > *',
    '[class*="space-y-4"] > *',
    '[class*="space-y-5"] > *',
    '[class*="space-y-6"] > *',
    '[class*="space-y-7"] > *',
    '[class*="space-y-8"] > *',
    '[class*="space-y-10"] > *',
    '[class*="space-y-12"] > *',
  ];
  
  for (const selector of spaceYSelectors) {
    const items = el.querySelectorAll(selector);
    if (items.length > 0) {
      return Array.from(items) as HTMLElement[];
    }
  }
  
  // Check for nested divs with space-y
  const nestedSpaceY = el.querySelectorAll('div[class*="space-y"] > *');
  if (nestedSpaceY.length > 0) {
    return Array.from(nestedSpaceY) as HTMLElement[];
  }
  
  // Check for direct children that are not text nodes or headings
  const directChildren = Array.from(el.children) as HTMLElement[];
  const filteredChildren = directChildren.filter(child => {
    const tagName = child.tagName.toLowerCase();
    return tagName !== 'h1' && tagName !== 'h2' && tagName !== 'h3' && tagName !== 'h4' && tagName !== 'h5' && tagName !== 'h6' && tagName !== 'p';
  });
  
  if (filteredChildren.length > 0) {
    return filteredChildren;
  }
  
  return directChildren;
};

onMounted(async () => {
  await nextTick();
  
  // Wait a bit more for React components to hydrate
  await new Promise(resolve => setTimeout(resolve, 100));
  
  if (!container.value || hasAnimated.value) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && container.value && !hasAnimated.value) {
          hasAnimated.value = true;
          
          // Wait a bit more to ensure React components are rendered
          setTimeout(() => {
            if (!container.value) return;
            
            const elements = findAnimateableElements(container.value);
            
            if (elements.length > 0) {
              elements.forEach((element, index) => {
                // Set initial state
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                
                // Animate with stagger
                setTimeout(() => {
                  element.style.opacity = '1';
                  element.style.transform = 'translateY(0)';
                }, props.delay + (index * props.stagger));
              });
            } else {
              // If no elements found, ensure container is visible
              if (container.value) {
                container.value.style.opacity = '1';
              }
            }
          }, 50);
          
          observer.disconnect();
        }
      });
    },
    { 
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px'
    }
  );

  if (container.value) {
    observer.observe(container.value);
  }
  
  // Fallback: ensure visibility after 1.5 seconds if animation didn't trigger
  setTimeout(() => {
    if (!hasAnimated.value && container.value) {
      const elements = findAnimateableElements(container.value);
      elements.forEach((element) => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      });
    }
  }, 1500);
});
</script>

<style scoped>
.stagger-in-container {
  /* Container styles */
}
</style>
