<script setup lang="ts">
import IconMaterial from '@/assets/icon-material.svg';
import IconVuetify from '@/assets/icon-vuetify.svg';
import BaseBtn from '@/components/base/BaseBtn.vue';
import BaseCard from '@/components/base/BaseCard.vue';
import BaseImage from '@/components/base/BaseImage.vue';
import BasePage from '@/components/base/BasePage.vue';

interface Tips {
  title: string;
  description: string;
}

const generalTips: Tips[] = [
  {
    title: 'Take advantage resources',
    description: `
    Material Design (which Vuetify is based on) has a lot of
    resources to help you pick an accessible color palette. I
    recommend their <a
    href="https://m3.material.io/styles"
    target="_blank">blogs on style</a> as a starting
    point.`
  },
  {
    title: 'Text color and dark mode',
    description: `
    If you set the background to a dark color, the text may be unreadable.
    This is not a bug. It is a feature. The text color is automatically
    set based on the theme mode. If you want to set the text color manually,
    you'll have to define this using css and the famous <code>!important</code>
    modifier.`
  }
];

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

        <base-image
          v-for="icon in icons"
          class="mx-1"
          :key="icon.label"
          :src="icon.src"
          :alt="icon.label"
          height="45px"/>
          
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
          to="/build">
          Build your theme
        </base-btn>
      </v-col>
    </v-row>

    <v-row id="landing-tips">
      <v-col
        class="text-center"
        cols="11">
        <h2>General Tips</h2>
      </v-col>


      <v-col
        v-for="(tip, i) in generalTips"
        :key="tip.title">
        <base-card class="tip-card">
          <v-card-title>
            Tip {{ i + 1 }}: {{ tip.title }}
          </v-card-title>

          <v-card-text>
            <p v-html="tip.description"></p>
          </v-card-text>
        </base-card>
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
  
  #landing-tips {
    padding-top: 2.5vh;
  }

  .tip-card {
    min-height: 200px;
  }
}
</style>
