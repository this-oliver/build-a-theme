<script setup lang="ts">
import BaseBtn from '@/components/base/BaseBtn.vue';
import BasePage from '@/components/base/BasePage.vue';
import { useThemeStore } from '@/stores/theme-store';
import { computed } from 'vue';

const themeStore = useThemeStore();

const code = computed<string>(() => {
  const theme = {
    dark: themeStore.dark,
    colors: {}
  }

  const colors = themeStore.colorSet === 'application' ? themeStore.applicationColors : themeStore.mainColors;

  colors.forEach((color) => {
    (theme.colors as any)[color.label] = color.value as string;
  });

  return JSON.stringify(theme, null, 2);
});

</script>

<template>
  <base-page>
    <v-row
      id="landing-header"
      justify="center">
      <v-col
        id="landing-header-pitch"
        class="text-center"
        md="6">
        <h1>Build-A-Theme</h1>
          
        <h2 class="mt-2">
          Build and export a theme for your Material Design based
          frontend project in real-time.
        </h2>
      </v-col>

      <v-divider class="border-opacity-0"></v-divider>

      <v-col
        cols="7"
        md="4">
        <base-btn
          class="mt-2"
          block
          large
          color="primary"
          to="/config">
          Get Started
        </base-btn>
      </v-col>
    </v-row>
  </base-page>
</template>

<style scoped>
#landing-header {
  padding-top: 15vh;
}

#landing-header h2 {
  font-weight: 400;
}

@media (min-width: 600px) {
  #landing-header {
    padding-top: 15vh;
  }
  
  #landing-header h1 {
    font-size: 3rem;
  }
  
  #landing-header h2 {
    font-size: 1.5rem;
  }
}
</style>
