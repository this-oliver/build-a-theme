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
  icon: {
    type: String,
    default: 'mdi-information-outline'
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
  <div>
    <v-divider class="border-opacity-50"></v-divider>
    <v-sheet
      class="mt-2 pa-2"
      rounded="lg"
      :color="getConfigColor">
      <slot
        name="title"
        class="mt-2 mt-md-0">
        <v-row justify="space-between">
          <v-col>
            <h2>{{ props.title }}</h2>
          </v-col>
          <v-col cols="auto">
            <v-icon :icon="props.icon"></v-icon>
          </v-col>
        </v-row>
      </slot>
    
      <v-divider class="border-opacity-0"></v-divider>
      <slot name="description">
        <p
          v-if="props.description"
          style="padding: 1rem 0;">{{ props.description }}</p>
      </slot>

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
    </v-sheet>

    <v-divider class="border-opacity-25 my-2"></v-divider>

    <slot></slot>
  </div>
</template>
