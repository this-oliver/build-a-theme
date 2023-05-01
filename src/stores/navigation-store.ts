import type { ActionItem } from '@/components/base/BaseCard.vue';
import { defineStore } from 'pinia';
import { computed } from 'vue';

export const useNavigationStore = defineStore('navigation', () => {

  const options = computed<ActionItem[]>(() => {
    return [
      {
        label: 'Build',
        icon: 'mdi-palette',
        to: '/config'
      },
      {
        label: 'Export',
        icon: 'mdi-export-variant',
        to: '/export'
      },
      {
        label: 'Help',
        icon: 'mdi-help-circle',
        to: '/help'
      }
    ]
  })

  return {
    options
  }
})