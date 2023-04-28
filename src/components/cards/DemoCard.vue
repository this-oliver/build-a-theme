<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  }
});

</script>

<template>
  <v-row>
    <v-col>
      <slot name="title">
        <h2>{{ props.title }}</h2>
      </slot>
    </v-col>

    <v-divider class="border-opacity-0"></v-divider>

    <v-col>
      <slot name="options"></slot>
    </v-col>

    <v-divider class="border-opacity-25"></v-divider>

    <v-col>
      <slot></slot>
    </v-col>
  </v-row>
</template>
