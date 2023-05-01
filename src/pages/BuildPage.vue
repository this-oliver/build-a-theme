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
      id="build"
      justify="center"
      justify-md="space-between">
      
      <v-col
        id="build-theme"
        md="4">
        <theme-config />
      </v-col>

      <v-col
        id="build-items"
        md="7">
        <demo-buttons
          id="build-item-button"
          :colors="themeStore.mainColors" />
        <demo-cards
          id="build-item-card"
          :colors="themeStore.mainColors"/>
        <demo-input-text
          id="build-item-input-text"
          :colors="themeStore.mainColors"/>
      </v-col>
    </v-row>
  </base-page>
</template>

<style>
@media (min-width: 600px) {
  #build > * {
    padding-bottom: 50px;
    
    /* fix height and force scroll vertically */
    max-height: 75vh;
    overflow-y: scroll;

    /* hide scrollbar */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  #build-item-card, #build-item-input-text {
    padding-top: 5vh;
  }
}
</style>