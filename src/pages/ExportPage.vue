<script setup lang="ts">
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
    <v-row justify="center">
      <v-col md="7">
        <content-card title="Theme">
          <template #description>
            The code snippet below is a ThemeDefinition for Vuetify, featuring all
            color configurations from the theme builder. This object is compatible
            with any Material Design-based UI framework. In order to use the theme,
            simply copy the code below and paste it into your application.
            <br />
            <br />
            <span style="font-style: italic;">
              If you are using Vuetify, visit the 
              <a
                href="https://vuetifyjs.com/en/features/theme/"
                target="_blank">Vuetify documentation</a> for more information.
            </span>
          </template>
          <config-card
            :colors="colors"
            :dark="themeStore.dark" />
        </content-card>
      </v-col>
    </v-row>
  </base-page>
</template>
