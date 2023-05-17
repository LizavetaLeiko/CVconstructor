import { useUserStore } from "~~/store/user";

const store = useUserStore();

export default defineNuxtRouteMiddleware((to, from) => {
  if (!store.getIsLogined) {
    return navigateTo("/");
  }
});
