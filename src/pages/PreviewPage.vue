<script setup lang="ts">
import BasePage from '@/components/base/BasePage.vue';
import PreviewButtons from '@/components/preview/PreviewButtons.vue';
import PreviewCards from '@/components/preview/PreviewCards.vue';
import PreviewInputText from '@/components/preview/PreviewInputText.vue';
import { useThemeStore } from '@/stores/theme-store';

const themeStore = useThemeStore();

</script>

<template>
  <base-page title="Preview Theme">
    <v-row justify="center">
      <v-col
        class="config-items"
        md="7">
        <preview-buttons
          id="item-button"
          style="padding-top: 0;"
          :colors="themeStore.mainColors" />
        <preview-cards
          id="item-card"
          :colors="themeStore.mainColors"/>
        <preview-input-text
          id="item-input-text"
          :colors="themeStore.mainColors"/>
      </v-col>
    </v-row>
  </base-page>
</template>
