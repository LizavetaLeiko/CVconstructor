import { defineStore } from 'pinia'

export const useIsEditableStore = defineStore('edit', {
  state: () => ({ 
    isEditable: false, 
  }),
  getters: {
    getIsEditable: (state) => state.isEditable,
  },
  actions: {
    changeIsEditable() {
      this.isEditable = !this.isEditable
    },
  },
})
