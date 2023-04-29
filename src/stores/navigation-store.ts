import type { ActionItem } from '@/components/base/BaseCard.vue';
import { useSidebarStore } from '@/stores/sidebar-store';
import { defineStore } from 'pinia';
import { computed } from 'vue';

export const useNavigationStore = defineStore('navigation', () => {
  const sidebarStore = useSidebarStore()

  const options = computed<ActionItem[]>(() => {
    return [
      {
        label: 'Sidebar',
        icon: sidebarStore.visible ? 'mdi-book-open-page-variant' : 'mdi-book-open-blank-variant',
        action: () => sidebarStore.toggle()
      },
      {
        label: 'Settings',
        icon: 'mdi-cog',
        to: '/settings'
      }
    ]
  })

  return {
    options
  }
})