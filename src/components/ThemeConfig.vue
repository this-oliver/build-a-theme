<script setup lang="ts">
import BaseBtn from '@/components/base/BaseBtn.vue';
import ContentCard from '@/components/cards/ContentCard.vue';
import ThemeForm from '@/components/forms/ThemeForm.vue';
import { useThemeStore } from '@/stores/theme-store';
import { computed, ref, watch } from 'vue';

const ContentTitle = 'Theme Config';
const ContentDescription = 'Play around with the colors below to see how they affect the components on the page and the application as a whole.';

const props = defineProps({
  readOnly: {
    type: Boolean,
    default: false
  }
});

const themeStore = useThemeStore();

const darkMode = ref<boolean>(themeStore.dark);

const colors = computed(() => themeStore.colorSet === 'application' ? themeStore.applicationColors : themeStore.brandColors);

watch(darkMode, (value) => {
  themeStore.setDarkMode(value);
})

</script>

<template>
  <content-card
    :title="ContentTitle"
    :description="ContentDescription">
    <template #options>
      <base-btn
        class="mr-1 mt-1"
        size="small"
        :outlined="darkMode"
        :tonal="!darkMode"
        :disabled="props.readOnly"
        @click="darkMode = !darkMode">
        <p>
          {{ darkMode ? 'light mode' : 'dark mode' }}
          <v-icon :icon="darkMode ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"/>
        </p>
      </base-btn>

      <base-btn
        class="mr-1 mt-1"
        size="small"
        :outlined="themeStore.colorSet === 'application'"
        :tonal="themeStore.colorSet !== 'application'"
        :disabled="props.readOnly"
        @click="themeStore.toggleColorSet">
        All Colors
        <v-icon icon="mdi-palette-swatch-outline"/>
      </base-btn>

      <base-btn
        class="mr-1 mt-1"
        tonal
        size="small"
        :disabled="props.readOnly"
        @click="themeStore.generateRandomTheme">
        Random
        <v-icon icon="mdi-dice-5-outline"/>
      </base-btn>
    </template>
    
    <v-row justify="center">
      <v-col
        v-for="color in colors"
        :key="color.label"
        cols="11"
        :md="themeStore.colorSet === 'application' ? 11 : 6">
        <theme-form :color="color"/>
      </v-col>
    </v-row>
  </content-card>
</template>