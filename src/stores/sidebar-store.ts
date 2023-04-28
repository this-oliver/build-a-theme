import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    visible: false
  }),
  actions: {
    toggle() {
      this.visible = !this.visible
    }
  }
})
