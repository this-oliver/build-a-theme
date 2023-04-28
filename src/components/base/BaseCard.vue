<script setup lang="ts">
import BaseBtn from '@/components/base/BaseBtn.vue';
import type { ComputedRef, PropType } from 'vue';
import { computed } from 'vue';

/**
 * Actions to be displayed in the card footer.
 */
export interface ActionItem {
  label: string;
  description?: string;
  color?: string;
  icon?: string;
  disabled?: boolean;
  outlined?: boolean;
  hint?: string;
  to?: string;
  action?: () => void;
}

const props = defineProps({
  title: {
    type: String,
    default: undefined
  },
  subtitle: {
    type: String,
    default: undefined
  },
  color: {
    type: String,
    default: undefined
  },
  flat: {
    type: Boolean,
    default: undefined
  },
  plain: {
    type: Boolean,
    default: undefined
  },
  tonal: {
    type: Boolean,
    default: undefined
  },
  outlined: {
    type: Boolean,
    default: undefined
  },
  rounded: {
    type: String,
    default: undefined
  },
  loading: {
    type: Boolean,
    default: false
  },
  actions: {
    type: Array as PropType<ActionItem[]>,
    default: () => []
  },
  actionCentered: {
    type: Boolean,
    default: false
  }
})

type CardStyle = 'flat' | 'outlined' | 'text' | 'elevated' | 'tonal' | 'plain';
const getCardStyle: ComputedRef<NonNullable<CardStyle> | undefined> = computed(() => {
  if(props.outlined === true){
    return 'outlined';
  } else if(props.plain === true){
    return 'plain';
  } else if(props.tonal === true){
    return 'tonal';
  } else {
    return 'flat'
  }
});

const getActions: ComputedRef<ActionItem[]> = computed(() => {
  return props.actions.map((item) => {
    return {
      ...item,
      action: () => {
        if(item.action){
          item.action();
        }
      }
    };
  });
})
</script>

<template>
  <v-card
    :title="props.title"
    :subtitle="props.subtitle"
    :color="props.color"
    :rounded="props.rounded"
    :variant="getCardStyle"
    class="pa-1 pa-md-2">
    <slot></slot>

    <template
      #actions
      v-if="getActions.length > 0">

      <v-row :justify="props.actionCentered ? 'center' : undefined">
        <v-col
          cols="auto"
          v-for="item in getActions"
          :key="item.label">
          <base-btn
            :color="item.color"
            :hint="item.hint"
            :outlined="item.outlined"
            :loading="props.loading"
            @click="item.action" >
            {{ item.label }}
          </base-btn >
        </v-col>
      </v-row>
    </template >
  </v-card >
</template>