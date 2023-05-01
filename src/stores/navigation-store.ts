import type { ActionItem } from '@/components/base/BaseCard.vue';
import { defineStore } from 'pinia';
import { computed } from 'vue';

export const useNavigationStore = defineStore('navigation', () => {

  const options = computed<ActionItem[]>(() => {
    return [
      {
        label: 'Configure',
        icon: 'mdi-palette',
        to: '/config'
      },
      {
        label: 'Preview',
        icon: 'mdi-eye-outline',
        to: '/preview'
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