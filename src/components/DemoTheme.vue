<script setup lang="ts">
import BaseBtn from '@/components/base/BaseBtn.vue';
import BaseDemo from '@/components/cards/DemoCard.vue';
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
  <base-demo title="Theme">
    <template #options>
      <base-btn
        :outlined="darkMode"
        size="small"
        class="mr-1 mt-1"
        @click="darkMode = !darkMode">
        {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
      </base-btn>
    </template>
    
    <v-row>
      <v-col
        v-for="color in themeStore.colors"
        :key="color"
        md="auto">
        <theme-form :color="color" />
      </v-col>
    </v-row>
  </base-demo>
</template>