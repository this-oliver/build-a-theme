<script setup lang="ts">
import BaseBtn from '@/components/base/BaseBtn.vue';
import ContentCard from '@/components/cards/ContentCard.vue';
import ThemeForm from '@/components/forms/ThemeForm.vue';
import { useThemeStore } from '@/stores/theme-store';
import { ref, watch } from 'vue';

const themeStore = useThemeStore();

const darkMode = ref<boolean>(themeStore.dark);

watch(darkMode, (value) => {
  themeStore.setDarkMode(value);
})

</script>

<template>
  <content-card title="Theme">
    <template #options>
      <base-btn
        :outlined="darkMode"
        size="small"
        class="mr-1 mt-1"
        @click="darkMode = !darkMode">
        <span>
          {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
        </span>
        <v-icon
          :icon="darkMode ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
          size="small"
          class="mx-1"/>
      </base-btn>
    </template>
    
    <v-row>
      <v-col
        v-for="color in themeStore.colors"
        :key="color"
        md="6">
        <theme-form :color="color" />
      </v-col>
    </v-row>
  </content-card>
</template>