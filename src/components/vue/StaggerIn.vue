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

onMounted(async () => {
  await nextTick();
  
  if (!container.value) return;

  const findAnimateableElements = (el: HTMLElement): HTMLElement[] => {
    const elements: HTMLElement[] = [];
    
    const gridItems = el.querySelectorAll('.grid > *');
    const spaceYItems = el.querySelectorAll('[class*="space-y"] > *');
    
    if (gridItems.length > 0) {
      elements.push(...Array.from(gridItems) as HTMLElement[]);
    } else if (spaceYItems.length > 0) {
      elements.push(...Array.from(spaceYItems) as HTMLElement[]);
    } else {
      const directChildren = Array.from(el.children) as HTMLElement[];
      directChildren.forEach(child => {
        if (child.tagName !== 'H2' && child.tagName !== 'H3' && child.tagName !== 'H4' && child.tagName !== 'P') {
          elements.push(child);
        }
      });
    }
    
    return elements;
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && container.value) {
          const elements = findAnimateableElements(container.value);
          
          if (elements.length > 0) {
            elements.forEach((element, index) => {
              element.style.opacity = '0';
              element.style.transform = 'translateY(30px)';
              element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
              
              setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
              }, props.delay + (index * props.stagger));
            });
          }
          observer.disconnect();
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  if (container.value) {
    observer.observe(container.value);
  }
});
</script>

<style scoped>
.stagger-in-container {
  /* Container styles if needed */
}
</style>

