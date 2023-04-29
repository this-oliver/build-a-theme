<script setup lang="ts">
import BaseBtn from '@/components/base/BaseBtn.vue';
import ContentCard from '@/components/cards/ContentCard.vue';
import ThemeForm from '@/components/forms/ThemeForm.vue';
import { useThemeStore } from '@/stores/theme-store';
import { ref, watch } from 'vue';

const props = defineProps({
  readOnly: {
    type: Boolean,
    default: false
  }
});

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
        :disabled="props.readOnly"
        @click="darkMode = !darkMode">
        <p>
          Toggle {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
          <v-icon
            :icon="darkMode ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
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
        <theme-form :color="color"/>
      </v-col>
    </v-row>
  </content-card>
</template>