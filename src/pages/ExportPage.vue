<script setup lang="ts">
import ThemeConfig from '@/components/ThemeConfig.vue';
import BasePage from '@/components/base/BasePage.vue';
import ConfigCard from '@/components/cards/ConfigCard.vue';
import ContentCard from '@/components/cards/ContentCard.vue';
import { useThemeStore } from '@/stores/theme-store';
import { computed } from 'vue';

const themeStore = useThemeStore();

const colors = computed(() => {
  return themeStore.colorSet === 'application' ? themeStore.applicationColors : themeStore.brandColors;
});

</script>

<template>
  <base-page title="Export Theme">
    <v-row
      id="export"
      justify="center"
      justify-md="space-between">
      
      <v-col md="7">
        <content-card
          title="Theme"
          description="The snippet below is the config object that is used to generate the theme in this demo. You can copy and paste it into your project to apply the same theme.">
          <config-card
            :colors="colors"
            :dark="themeStore.dark" />
        </content-card>
      </v-col>

      <v-col md="4">
        <theme-config read-only />
      </v-col>
    </v-row>
  </base-page>
</template>

<style>
@media (min-width: 600px) {
  #export > * {
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