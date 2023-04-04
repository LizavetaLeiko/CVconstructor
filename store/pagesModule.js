import axios from "axios";

export const pagesModule = {
  state: () => ({
    isEditble: false,
  }),
  getters: {
    getIsEditable(state) {
      return state.isEditble
    },
  },
  mutations: {
    setIsEditble(state) {
      state.isEditble = !isEditble;
    },
  },
  actions: {
  },
  namespaced: true,
};
