<script setup lang="ts">
import DemoButtons from '@/components/DemoButtons.vue';
import DemoCards from '@/components/DemoCards.vue';
import ThemeConfig from '@/components/ThemeConfig.vue';
import BasePage from '@/components/base/BasePage.vue';

</script>

<template>
  <base-page title="Theme Builder">
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
        <demo-buttons id="demo-item-button" />
        <demo-cards id="demo-item-card" />
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
}
</style>