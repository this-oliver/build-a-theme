import type { ActionItem } from '@/components/base/BaseCard.vue';
import { useNotification } from '@/composables/useNotification';
import { defineStore } from 'pinia';

export const useNavigationStore = defineStore('navigation', () => {
  const { notify } = useNotification();
  
  const options: ActionItem[] = [
    { 
      label: 'about',
      icon: 'mdi-information-outline',
      to: '/about'
    },
    { 
      label: 'login',
      icon: 'mdi-login',
      action: () => {
        notify('Nav Bar', 'Login clicked', 'success')
      } 
    },
    { 
      label: 'register',
      icon: 'mdi-account-plus-outline',
      action: () => {
        notify('Nav Bar', 'Register clicked', 'success')
      }
    }
  ]

  return {
    options
  }
})