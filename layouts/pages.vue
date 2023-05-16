<template>
    <header>
      <NuxtLink :to="`/user/${$route.params.id}/edit`">
        <BtnWithoutBg>Edit resume</BtnWithoutBg>
      </NuxtLink>
      <DefaultBtn class="btn">Logout</DefaultBtn>
    </header>
    <slot/>
</template>
·
<script>

import { useIsEditableStore } from '~~/store/edit';

export default {
  name: 'LayoutPages',
  setup(){
    const router = useRouter();
    return{
      router
    }
  },
}
</script>

<style lang="sass" scoped>
header
  display: flex
  justify-content: space-between
  align-items: center
  padding: 15px
  border-bottom: .5px #000 solid
  width: 100%
  div
    display: flex
    gap: 20px
    align-items: center
.btn
  max-width: 100px
  padding: 5px
  font-size: 16px
</style>