<script setup lang="ts">

interface FooterLink {
  text: string;
  url: string;
}

const links: FooterLink[] = [
  { text: 'Oliverrr', url: 'https://www.oliverrr.net' },
  { text: 'GitHub (source code)', url: 'https://github.com/this-oliver/build-a-theme' }
]

</script>

<template>
  <v-footer
    app
    absolute
    class="pa-1">
    <v-row
      id="app-footer"
      class="my-2 my-md-1"
      justify="center"
      justify-md="start">
      <v-col
        v-for="link in links"
        :key="link.url"
        class="mx-1 text-center text-md-start"
        cols="8"
        md="auto">
        <a
          :href="link.url"
          target="_blank">{{ link.text }}</a>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>
a {
  color: inherit;
}

@media (min-width: 600px) {
  #app-footer {
    padding: 0 10vw;
  }
}
</style>
