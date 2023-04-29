<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs';

const { smAndDown } = useDisplay();

const props = defineProps({
  title: {
    type: String,
    defualt: undefined
  }
});

</script>

<template>
  <v-row class="pa-1">
    <v-col
      v-if="props.title"
      :class="`${smAndDown ? '' : 'text-center'} my-1`">
      <h1>{{ props.title }}</h1>
    </v-col>

    <v-divider class="border-opacity-0"></v-divider>

    <v-col>
      <slot></slot>
    </v-col>
  </v-row>
</template>