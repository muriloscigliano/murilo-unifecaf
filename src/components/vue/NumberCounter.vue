<template>
  <span class="number-counter">{{ displayValue }}</span>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

const props = defineProps<{
  value: number;
  duration?: number;
}>();

const displayValue = ref(0);
const duration = props.duration || 2000;

const animate = () => {
  const start = 0;
  const end = props.value;
  const startTime = performance.now();

  const update = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    displayValue.value = Math.floor(start + (end - start) * progress);
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      displayValue.value = end;
    }
  };

  requestAnimationFrame(update);
};

onMounted(() => {
  animate();
});

watch(() => props.value, () => {
  animate();
});
</script>

<style scoped>
.number-counter {
  font-variant-numeric: tabular-nums;
}
</style>

