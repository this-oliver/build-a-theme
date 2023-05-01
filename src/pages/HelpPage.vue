<script setup lang="ts">
import BasePage from '@/components/base/BasePage.vue';
import ContentCardVue from '@/components/cards/ContentCard.vue';

interface Tip {
  title: string;
  description: string;
}

const generalTips: Tip[] = [
  {
    title: 'Leverage Material Design Resources',
    description: `
    Material Design is a popular design framework created by Google. It
    provides a lot of resources to help you create beautiful and
    accessible websites. I recommend their <a
    href="https://m3.material.io/styles"
    target="_blank">blogs on style</a> as a starting
    point.`
  },
  {
    title: 'Colors and text colors',
    description: `
    Material Design uses a color system that adjusts text color based on
    on the background color. This system is not always perfect, so it is
    recommended to try out different colors to see what works best for
    your use case.`
  }
];

</script>

<template>
  <base-page title="Getting Started">
    <v-row justify="center">
      <v-col
        md="7"
        class="mt-2">
        <content-card-vue
          title="Usage"
          icon="mdi-brush-variant">
          <template #description>
            Build-A-Theme is a tool to help you build a theme for your
            Material UI project in real-time.
          </template>
          <v-card
            class="mt-2"
            elevation="0">
            <v-card-title>1. Configure your theme</v-card-title>
            <v-card-text>
              The first step is to configure your theme. You can do this by
              visiting the <router-link to="/config">config page</router-link>.
            </v-card-text>
          </v-card>

          <v-card
            class="mt-2"
            elevation="0">
            <v-card-title>2. Export your theme</v-card-title>
            <v-card-text>
              Once you are happy with your theme, you can export it by visiting
              the <router-link to="/export">export page</router-link>.
            </v-card-text>
          </v-card>
        </content-card-vue>
      </v-col>

      <v-col
        md="7"
        class="mt-2">
        <content-card-vue
          title="Tips"
          icon="mdi-lightbulb-outline">
          <template #description>
            Here are some tips to help you get started.
          </template>
          <v-card
            v-for="tip in generalTips"
            :key="tip.title"
            class="mt-2"
            elevation="0">
            <v-card-title>{{ tip.title }}</v-card-title>
            <v-card-text>
              <p v-html="tip.description"></p>
            </v-card-text>
          </v-card>
        </content-card-vue>
      </v-col>
    </v-row>
  </base-page>
</template>
