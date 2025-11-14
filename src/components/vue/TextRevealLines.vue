<template>
  <div ref="container" class="text-reveal-lines">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";

const container = ref<HTMLElement | null>(null);

onMounted(async () => {
  await nextTick();
  
  if (!container.value) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
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
    { threshold: 0.1 }
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

