import type { ActionItem } from '@/components/base/BaseCard.vue';
import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useSidebarStore } from './sidebar-store';
import { useThemeStore } from './theme-store';

export const useNavigationStore = defineStore('navigation', () => {
  const themeStore = useThemeStore()
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
      },
      {
        label: 'Theme',
        icon: themeStore.dark ? 'mdi-weather-night' : 'mdi-weather-sunny',
        action: () => themeStore.setDarkMode(!themeStore.dark)
      }
    ]
  })

  return {
    options
  }
})