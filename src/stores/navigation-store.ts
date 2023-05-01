import type { ActionItem } from '@/components/base/BaseCard.vue';
import { defineStore } from 'pinia';
import { computed } from 'vue';

export const useNavigationStore = defineStore('navigation', () => {

  const options = computed<ActionItem[]>(() => {
    return [
      {
        label: 'Getting Started',
        icon: 'mdi-lightbulb-outline',
        to: '/start'
      },
      {
        label: 'Configure',
        icon: 'mdi-palette',
        to: '/config'
      },
      {
        label: 'Export',
        icon: 'mdi-export-variant',
        to: '/export'
      }
    ]
  })

  return {
    options
  }
})