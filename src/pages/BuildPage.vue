<script setup lang="ts">
import ThemeConfig from '@/components/ThemeConfig.vue';
import BasePage from '@/components/base/BasePage.vue';
import DemoButtons from '@/components/demo/DemoButtons.vue';
import DemoCards from '@/components/demo/DemoCards.vue';

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
        <demo-buttons id="demo-item-button" />
        <demo-cards id="demo-item-card" />
      </v-col>
    </v-row>
  </base-page>
</template>

<style>
#demo-items > * {
  padding: 1rem;
}

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