<script setup lang="ts">
import type { ContentAction } from '@/components/cards/ContentCard.vue';
import ContentCard from '@/components/cards/ContentCard.vue';
import { useVuetifyOptions } from '@/composables/useVuetifyOptions';
import type { Color } from '@/stores/theme-store';
import type { PropType } from 'vue';
import { computed } from 'vue';

const DemoTitle = 'Cards';
const DemoDescription = 'Cards are used to display content related to a single subject. Try toggling the options below to see how they affect the cards.';

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
    :title="DemoTitle"
    :description="DemoDescription"
    :actions="actions">

    <v-row
      justify="center"
      justify-md="start">
      <v-col
        v-for="color in props.colors"
        :key="color"
        cols="12"
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