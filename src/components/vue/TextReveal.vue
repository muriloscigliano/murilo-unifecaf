<template>
  <div class="text-reveal-container">
    <span
      v-for="(char, index) in textArray"
      :key="index"
      :style="{ animationDelay: `${index * 0.05}s` }"
      class="text-reveal-char"
    >
      {{ char === " " ? "\u00A0" : char }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  text: string;
}>();

const textArray = computed(() => props.text.split(""));
</script>

<style scoped>
.text-reveal-container {
  display: inline-block;
}

.text-reveal-char {
  display: inline-block;
  animation: reveal 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes reveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

