import type { ActionItem } from '@/components/base/BaseCard.vue';
import { defineStore } from 'pinia';
import { computed } from 'vue';

export const useNavigationStore = defineStore('navigation', () => {

  const options = computed<ActionItem[]>(() => {
    return [
      {
        label: 'Build Theme',
        icon: 'mdi-palette',
        to: '/build'
      },
      {
        label: 'Export Theme',
        icon: 'mdi-export-variant',
        to: '/export'
      }
    ]
  })

  return {
    options
  }
})