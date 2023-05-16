<template>
  <div class="app">
    <NuxtPage />
  </div>
</template>
<script>
import { useUserStore } from '~/store/user';
export default {
  name: 'app',
  // mounted(){
  //   this.userStore.getUserQuery('643e984d5327b8e13d8017ec');
  // },
  // setup(){
  //   const userStore = useUserStore();
  //   return{
  //     userStore
  //   }
  // }
};
</script>
<style>
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.app{
  background-color: #fff;
  min-height: 100vh;
  color: #000;
  font-family: 'Lato', sans-serif;
}

</style>