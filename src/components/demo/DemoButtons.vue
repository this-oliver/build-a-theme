<script setup lang="ts">
import type { ContentAction } from '@/components/cards/ContentCard.vue';
import ContentCard from '@/components/cards/ContentCard.vue';
import { useVuetifyOptions } from '@/composables/useVuetifyOptions';
import { useThemeStore } from '@/stores/theme-store';
import { computed } from 'vue';

const { options, variant, disabled, loading, toggleOption } = useVuetifyOptions();
const { colors } = useThemeStore();

const actions = computed<ContentAction[]>(() => {
  return options.value.map(option => {
    return {
      option,
      toggle: () => toggleOption(option)
    };
  });
});

</script>

<template>
  <content-card
    title="Buttons"
    :actions="actions">

    <v-row>
      <v-col
        v-for="color in colors"
        :key="color"
        md="3">
        <v-btn
          class="button"
          :color="color.value"
          :variant="variant"
          :disabled="disabled"
          :loading="loading">
          Btn
        </v-btn>
        <small>{{ color.label }}</small>
      </v-col>
    </v-row>
  </content-card>
</template>

<style scoped>
.button {
  width: 100%;
}
</style>