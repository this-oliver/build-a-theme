<script setup lang="ts">
import ThemeConfig from '@/components/ThemeConfig.vue';
import BasePage from '@/components/base/BasePage.vue';
import DemoButtons from '@/components/demo/DemoButtons.vue';
import DemoCards from '@/components/demo/DemoCards.vue';
import DemoInputText from '@/components/demo/DemoInputText.vue';
import { useThemeStore } from '@/stores/theme-store';

const themeStore = useThemeStore();

</script>

<template>
  <base-page title="Build Theme">
    <v-row
      id="demo"
      justify="center"
      justify-md="space-between">
      
      <v-col
        id="demo-theme"
        md="4">
        <theme-config />
      </v-col>

      <v-col
        id="demo-items"
        md="7">
        <demo-buttons
          id="demo-item-button"
          :colors="themeStore.colors" />
        <demo-cards
          id="demo-item-card"
          :colors="themeStore.colors"/>
        <demo-input-text
          id="demo-item-input-text"
          :colors="themeStore.colors"/>
      </v-col>
    </v-row>
  </base-page>
</template>

<style>
@media (min-width: 600px) {
  #demo-theme {
    overflow-y: hidden;
  }
  
  #demo-items {
    padding-bottom: 50px;

    /* fix height and force scroll vertically */
    max-height: 75vh;
    overflow-y: scroll;
  
    /* hide scrollbar */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  #demo-item-card, #demo-item-input-text {
    padding-top: 5vh;
  }
}
</style>