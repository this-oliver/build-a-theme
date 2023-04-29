<script setup lang="ts">
import type { ContentAction } from '@/components/cards/ContentCard.vue';
import ContentCard from '@/components/cards/ContentCard.vue';
import { useVuetifyOptions } from '@/composables/useVuetifyOptions';
import type { Color } from '@/stores/theme-store';
import type { PropType } from 'vue';
import { computed } from 'vue';

const props = defineProps({
  colors: {
    type: Array as PropType<Color[]>,
    required: true
  }
});

const { options, variant, disabled, loading, toggleOption } = useVuetifyOptions();

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
        v-for="color in props.colors"
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