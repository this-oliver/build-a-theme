<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs';

const { smAndDown } = useDisplay();
</script>

<template>
  <h2>🖍️ <span v-if="!smAndDown">Theme Builder</span></h2>
</template>