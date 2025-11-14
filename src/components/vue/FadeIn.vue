<template>
  <div
    ref="container"
    :class="['fade-in-container', { 'is-visible': isVisible }]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const container = ref<HTMLElement | null>(null);
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
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
.fade-in-container {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in-container.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>

