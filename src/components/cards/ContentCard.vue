<script setup lang="ts">
import BaseBtn from '@/components/base/BaseBtn.vue';
import type { Option } from '@/composables/useVuetifyOptions';
import { useThemeStore } from '@/stores/theme-store';
import type { PropType } from 'vue';
import { computed } from 'vue';

export interface ContentAction {
  option: Option;
  toggle: () => void;
}

const themeStore = useThemeStore();

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: undefined
  },
  configMode: {
    type: Boolean,
    default: false
  },
  actions: {
    type: Array as PropType<ContentAction[]>,
    default: () => []
  }
});

const getConfigColor = computed<string>(() => {
  return themeStore.dark ? 'grey-darken-3' : 'grey-lighten-4';
});

</script>

<template>
  <v-row no-gutters>
    <v-divider class="border-opacity-50"></v-divider>
    <v-sheet
      class="mt-2 pa-1"
      rounded="lg"
      :color="getConfigColor">
      <v-col class="mt-2 mt-md-0">
        <slot name="title">
          <v-row justify="space-between">
            <v-col>
              <h2>{{ props.title }}</h2>
            </v-col>
            <v-col cols="auto">
              <v-icon :icon="props.configMode ? 'mdi-brush-variant' : 'mdi-palette-swatch-outline'"></v-icon>
            </v-col>
          </v-row>
        </slot>
      </v-col>
    
      <v-divider class="border-opacity-0"></v-divider>
    
      <v-col>
        <slot name="description">
          <p v-if="props.description">{{ props.description }}</p>
        </slot>
      </v-col>

      <v-divider class="border-opacity-0"></v-divider>

      <v-col>
        <slot name="options">
          <base-btn
            v-for="action in actions"
            :key="action.option.label"
            class="mr-1 mt-1"
            :outlined="action.option.value"
            :tonal="!action.option.value"
            size="small"
            @click="action.toggle">
            <span :style="`font-weight: ${action.option.value ? 'bold' : 'normal'};`">{{ action.option.label }}</span>
          </base-btn>
        </slot>
      </v-col>
    </v-sheet>

    <v-divider class="border-opacity-25 my-2"></v-divider>

    <v-col cols="12">
      <slot></slot>
    </v-col>
  </v-row>
</template>
