<script setup lang="ts">
import type { ContentAction } from '@/components/cards/ContentCard.vue';
import ContentCard from '@/components/cards/ContentCard.vue';
import { useVuetifyOptions } from '@/composables/useVuetifyOptions';
import type { Color } from '@/stores/theme-store';
import type { PropType } from 'vue';
import { computed } from 'vue';

const ContentTitle = 'Buttons';
const ContentDescription = 'Buttons are used to trigger an action. Try toggling the options below to see how they affect the cards.';

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
    :title="ContentTitle"
    :description="ContentDescription"
    :actions="actions">

    <v-row>
      <v-col
        v-for="color in props.colors"
        :key="color.label"
        cols="6"
        md="3">
        <v-btn
          class="button"
          :color="color.value"
          :variant="(variant as any)"
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