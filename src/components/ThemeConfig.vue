<script setup lang="ts">
import BaseBtn from '@/components/base/BaseBtn.vue';
import ContentCard from '@/components/cards/ContentCard.vue';
import ThemeForm from '@/components/forms/ThemeForm.vue';
import type { Color } from '@/stores/theme-store';
import { useThemeStore } from '@/stores/theme-store';
import { computed, ref, watch } from 'vue';

const props = defineProps({
  readOnly: {
    type: Boolean,
    default: false
  }
});

const themeStore = useThemeStore();

const darkMode = ref<boolean>(themeStore.dark);

const colors = computed<Color[]>(() => {
  return themeStore.standardColors;
});

watch(darkMode, (value) => {
  themeStore.setDarkMode(value);
})

</script>

<template>
  <content-card title="Config">
    <template #options>
      <base-btn
        :outlined="darkMode"
        size="small"
        class="mr-1 mt-1"
        :disabled="props.readOnly"
        @click="darkMode = !darkMode">
        <p>
          Toggle {{ darkMode ? 'light mode' : 'dark mode' }}
          <v-icon :icon="darkMode ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"/>
        </p>
      </base-btn>

      <base-btn
        size="small"
        class="mr-1 mt-1"
        :disabled="props.readOnly"
        @click="themeStore.randomTheme">
        Random theme
        <v-icon icon="mdi-dice-5-outline"/>
      </base-btn>
    </template>
    
    <v-row>
      <v-col
        v-for="color in colors"
        :key="color.label"
        :cols="6">
        <theme-form :color="color"/>
      </v-col>
    </v-row>
  </content-card>
</template>