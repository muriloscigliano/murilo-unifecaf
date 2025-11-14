<template>
  <div ref="container" class="text-reveal-lines">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";

const container = ref<HTMLElement | null>(null);
const hasAnimated = ref(false);

onMounted(async () => {
  await nextTick();
  
  if (!container.value || hasAnimated.value) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.value) {
          hasAnimated.value = true;
          const lines = container.value?.querySelectorAll(".reveal-line");
          if (lines && lines.length > 0) {
            lines.forEach((line, index) => {
              setTimeout(() => {
                (line as HTMLElement).classList.add("is-visible");
              }, index * 150);
            });
          }
          observer.disconnect();
        }
      });
    },
    { 
      threshold: 0.2,
      rootMargin: '0px'
    }
  );

  if (container.value) {
    observer.observe(container.value);
  }
});
</script>

<style scoped>
:deep(.reveal-line) {
  display: block;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

:deep(.reveal-line.is-visible) {
  opacity: 1;
  transform: translateY(0);
}
</style>
