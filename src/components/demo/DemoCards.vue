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
    title="Cards"
    :actions="actions">

    <v-row
      justify="center"
      justify-md="start">
      <v-col
        v-for="color in colors"
        :key="color"
        cols="11"
        md="4">
        <v-card
          :color="color.value"
          :variant="variant"
          :disabled="disabled"
          :loading="loading"
          style="width: 100%;">
          <v-card-title>Card</v-card-title>
          <v-card-subtitle>{{ color.label }}</v-card-subtitle>
          <v-card-text>
            Lorem ip sum dolor sit amet, consectetur adipiscing elit. Nullam
            vitae diam et dolor lobortis aliquam. Donec nec dolor vitae.
          </v-card-text>
          <v-card-actions>
            <v-btn block>Action</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </content-card>
</template>