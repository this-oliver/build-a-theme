<script setup lang="ts">
import { useThemeStore } from '@/stores';
import { computed } from 'vue';

const themeStore = useThemeStore();

const color = computed(() => {
  return themeStore.colors.find((color) => color.label === 'surface')?.value || 'error';
})

</script>

<template>
  <v-footer
    app
    :color="color">
    <span>&copy; footer example</span>
  </v-footer>
</template>