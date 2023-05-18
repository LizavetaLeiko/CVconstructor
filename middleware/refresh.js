import { useUserStore } from "~~/store/user";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = useUserStore()
  const router = useRouter();
  await store.refresh()
  if (!store.getIsLogined && router.currentRoute._value.fullPath.split('').slice(-4).join('') === 'edit') {
    return navigateTo("/");
  }
});
