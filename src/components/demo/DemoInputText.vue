<script setup lang="ts">
import type { ContentAction } from '@/components/cards/ContentCard.vue';
import ContentCard from '@/components/cards/ContentCard.vue';
import { useVuetifyOptions } from '@/composables/useVuetifyOptions';
import { useThemeStore } from '@/stores/theme-store';
import { computed, ref } from 'vue';

const { options, variant, disabled, loading, toggleOption } = useVuetifyOptions('input');
const { colors } = useThemeStore();

const form = ref<string>('');

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
    title="Text Field"
    :actions="actions">

    <v-row
      justify="center"
      justify-md="start">
      <v-col
        v-for="color in colors"
        :key="color"
        cols="11"
        md="6">

        <v-text-field
          v-model="form"
          :color="color.value"
          :variant="variant"
          :disabled="disabled"
          :loading="loading"
          :rules="[(value: string) => !!value.length || 'This field is required']"
          :label="color.label"
          placeholder="Type here to test..."/>
      </v-col>
    </v-row>
  </content-card>
</template>