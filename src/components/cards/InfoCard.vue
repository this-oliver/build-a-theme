<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue';

const props = defineProps({
  message: {
    type: String,
    required: true
  },

  htmlIsh: {
    type: Boolean,
    default: false
  },

  color: {
    type: String,
    default: 'primary'
  }
});
</script>

<template>
  <base-card :color="props.color">
    <v-card-text>
      <span
        v-if="props.htmlIsh"
        v-html="props.message" />
      <span v-else>{{ props.message }}</span>
    </v-card-text>
  </base-card>
</template>
