<script setup lang="ts">
import BasePage from '@/components/base/BasePage.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<template>
  <base-page title="Oops 🔍">
    <v-row
      justify="center"
      class="text-center">
      <v-col md="8">
        <p class="message">Can't find a page with the path: <code>{{ route.path }}</code></p>
      </v-col>
    </v-row>
  </base-page>
</template>

<style scoped>
.message {
  font-size: 1.5rem;
}

.message code {
  font-style: italic;
}
</style>