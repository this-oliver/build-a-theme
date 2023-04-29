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
  <content-card title="Config">
    <template #options>
      <base-btn
        outlined
        size="small"
        class="mr-1 mt-1"
        @click="darkMode = !darkMode">
        <p>
          {{ darkMode ? 'Dark Mode' : 'Light Mode' }}
          <v-icon
            :icon="darkMode ? 'mdi-weather-night' : 'mdi-white-balance-sunny'"
            size="small"
            class="mx-1"/>
        </p>
      </base-btn>
    </template>
    
    <v-row>
      <v-col
        v-for="color in themeStore.colors"
        :key="color"
        cols="6">
        <theme-form :color="color" />
      </v-col>
    </v-row>
  </content-card>
</template>