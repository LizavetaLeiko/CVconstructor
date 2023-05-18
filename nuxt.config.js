import { useUserStore } from "./store/user";

export default defineNuxtConfig({
  components: true,
  modules: [
    '@pinia/nuxt',
  ],
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Vollkorn+SC:wght@400;600;700;900&display=swap" 
      }
    ],  
  },
})

