<script setup lang="ts">
import BaseBtn from '@/components/base/BaseBtn.vue';
import type { Option } from '@/composables/useVuetifyOptions';
import type { PropType } from 'vue';

export interface ContentAction {
  option: Option;
  toggle: () => void;
}

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: undefined
  },
  actions: {
    type: Array as PropType<ContentAction[]>,
    default: () => []
  }
});

</script>

<template>
  <v-row no-gutters>
    <v-col>
      <slot name="title">
        <h2>{{ props.title }}</h2>
      </slot>
    </v-col>
    
    <v-divider class="border-opacity-0"></v-divider>
    
    <v-col>
      <slot name="description">
        <h2>{{ props.description }}</h2>
      </slot>
    </v-col>

    <v-col>
      <slot name="options">
        <base-btn
          v-for="action in actions"
          :key="action.option.label"
          class="mr-1 mt-1"
          size="small"
          :outlined="action.option.value"
          @click="action.toggle">
          <span :style="`font-weight: ${action.option.value ? 'bold' : 'normal'};`">{{ action.option.label }}</span>
        </base-btn>
      </slot>
    </v-col>

    <v-divider class="border-opacity-25 my-2"></v-divider>

    <v-col cols="12">
      <slot></slot>
    </v-col>
  </v-row>
</template>
