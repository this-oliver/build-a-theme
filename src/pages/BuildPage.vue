<script setup lang="ts">
import ButtonDemo from '@/components/DemoButtons.vue';
import CardDemo from '@/components/DemoCards.vue';
import ThemeDemo from '@/components/DemoTheme.vue';
import BasePage from '@/components/base/BasePage.vue';
import ConfigCard from '@/components/cards/ConfigCard.vue';
import { useThemeStore } from '@/stores/theme-store';

const themeStore = useThemeStore();

</script>

<template>
  <base-page title="Theme Builder">
    <config-card
      :colors="themeStore.colors"
      :dark="themeStore.dark" />
    <theme-demo />
    <button-demo />
    <card-demo />
  </base-page>
</template>
