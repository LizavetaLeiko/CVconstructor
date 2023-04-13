<template>
    <header>
      <div>
        <BtnWithoutBg @click="isEditableStore.changeIsEditable">Edit resume</BtnWithoutBg>
      </div>
      <DefaultBtn class="btn">Logout</DefaultBtn>
    </header>
    <slot/>
</template>

<script>

import { useIsEditableStore } from '~~/store/edit';

export default {
  name: 'LayoutPages',
  setup(){
    const isEditableStore = useIsEditableStore();
    return{
      isEditableStore
    }
  }
}
</script>

<style lang="sass" scoped>
header
  display: flex
  justify-content: space-between
  align-items: center
  padding: 15px
  border-bottom: .5px #fff solid
  div
    display: flex
    gap: 20px
    align-items: center
.btn
  max-width: 100px
  padding: 5px
  font-size: 16px
</style>