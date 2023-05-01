<script setup lang="ts">
import IconMaterial from '@/assets/icon-material.svg';
import IconVuetify from '@/assets/icon-vuetify.svg';
import BaseBtn from '@/components/base/BaseBtn.vue';
import BaseImage from '@/components/base/BaseImage.vue';
import BasePage from '@/components/base/BasePage.vue';

interface Icons {
  src: string;
  label: string;
}

const icons: Icons[] = [
  { src: IconVuetify, label: 'Vuetify' },
  { src: IconMaterial, label: 'Material Design' }
];


</script>

<template>
  <base-page>
    <v-row
      id="landing-header"
      justify="center">
      <v-col
        id="landing-header-pitch"
        class="text-center"
        md="7">
        <h1>Build-A-Theme</h1>
          
        <h2 class="mt-2">
          A theme builder for Vuetify & Material UI projects that allows you to
          build a theme with real-time preview. Once you are happy 
          with your theme, you can export the ThemeConfig object to
          use in your project.
        </h2>
      </v-col>

      <v-divider class="border-opacity-0"></v-divider>

      <v-col
        cols="auto"
        md="6">
        <base-btn
          class="mt-2"
          block
          large
          color="primary"
          to="/start">
          Get Started
        </base-btn>
      </v-col>
    </v-row>

    <v-row
      class="mt-2"
      style="padding-top: 2rem;"
      justify="center">
      <v-col
        v-for="icon in icons"
        :key="icon.label"
        class="text-center"
        cols="auto"
        md="2">
        <base-image
          class="mx-1"
          :src="icon.src"
          :alt="icon.label"
          height="45px"/>
      </v-col>
    </v-row>
  </base-page>
</template>

<style scoped>
#landing-header {
  padding-top: 5vh;
}

#landing-header h2 {
  font-weight: 400;
}

@media (min-width: 600px) {
  #landing-header {
    padding-top: 5vh;
  }
  
  #landing-header h1 {
    font-size: 3rem;
  }
  
  #landing-header h2 {
    font-size: 1.5rem;
  }
}
</style>
