<script setup lang="ts">
import ThemeConfig from '@/components/ThemeConfig.vue';
import BasePage from '@/components/base/BasePage.vue';
import ConfigCard from '@/components/cards/ConfigCard.vue';
import ContentCard from '@/components/cards/ContentCard.vue';
import { useThemeStore } from '@/stores/theme-store';

const themeStore = useThemeStore();

</script>

<template>
  <base-page title="Export Theme">
    <v-row
      justify="center"
      justify-md="space-between">
      
      <v-col md="7">
        <content-card title="Config">
          <template #options>
            <p>
              The snippet below is the config object that is used to generate the theme in this demo. You can
              copy and paste it into your project to apply the same theme.
            </p>

          </template>
          <config-card
            :colors="themeStore.colors"
            :dark="themeStore.dark" />
        </content-card>
      </v-col>

      <v-col md="4">
        <theme-config />
      </v-col>
    </v-row>
  </base-page>
</template>
