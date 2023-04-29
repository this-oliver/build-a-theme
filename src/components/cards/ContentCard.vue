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
    <v-divider class="border-opacity-50"></v-divider>

    <v-col class="mt-2 mt-md-0">
      <slot name="title">
        <h2>{{ props.title }}</h2>
      </slot>
    </v-col>
    
    <v-divider class="border-opacity-0"></v-divider>
    
    <v-col>
      <slot name="description">
        <v-row
          v-if="props.description"
          align="center">
          <v-col cols="1">
            <v-icon icon="mdi-information-outline"></v-icon>
          </v-col>
          <v-col>
            <p class="mt-2">{{ props.description }}</p>
          </v-col>
        </v-row>
      </slot>
    </v-col>

    <v-divider class="border-opacity-0"></v-divider>

    <v-col class="mt-2">
      <slot name="options">
        <base-btn
          v-for="action in actions"
          :key="action.option.label"
          class="mr-1 mt-1"
          :outlined="action.option.value"
          size="small"
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
