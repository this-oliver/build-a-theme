<script setup lang="ts">
import { useClipboard } from '@/composables/useClipboard';
import type { Color } from '@/stores/theme-store';
import { useThemeStore } from '@/stores/theme-store';
import type { PropType } from 'vue';
import { computed } from 'vue';

const themeStore = useThemeStore();
const { copyToClipboard } = useClipboard();

const props = defineProps({
  color: {
    type: Object as PropType<Color>,
    required: true
  },
  readOnly: {
    type: Boolean,
    default: false
  }
});

/**
 * `on-background` and `on-surface` are special cases that
 * should be black or white depending on the theme for
 * readability.
 */
const getColor = computed<string>(() => {
  switch (props.color.label) {
  case 'on-background':
    return themeStore.getColor('background')?.value || props.color.value;
    
  case 'on-surface':
    return themeStore.getColor('surface')?.value || props.color.value;
  
  default:
    return props.color.value;
  }
});

</script>

<template>
  <v-card
    class="pa-2"
    rounded="lg"
    elevation="0"
    density="compact"
    :color="getColor">
    <v-row
      no-gutters
      justify="space-between"
      align="center">
      <v-col>
        <v-card-title>{{ color.label }}</v-card-title>
      </v-col>

      <v-col
        class="text-end"
        cols="auto">
        <v-card-subtitle>
          <v-sheet
            :class="`clickable pa-1 rounded text-${themeStore.dark ? 'white' : 'black'}`"
            @click="copyToClipboard(color.value, `Copied '${color.label}' value (${color.value})`)">
            {{ color.value }}
            <v-icon
              :color="color.value"
              icon="mdi-circle"></v-icon>
          </v-sheet>
        </v-card-subtitle>
      </v-col>
        
      <v-col cols="12">
        <v-card-text>{{ color.description }}</v-card-text>
      </v-col>
    </v-row>

    <slot name="actions"></slot>
  </v-card>
</template>