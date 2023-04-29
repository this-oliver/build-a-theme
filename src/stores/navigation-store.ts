import type { ActionItem } from '@/components/base/BaseCard.vue';
import { defineStore } from 'pinia';
import { computed } from 'vue';

export const useNavigationStore = defineStore('navigation', () => {

  const options = computed<ActionItem[]>(() => {
    return [
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