<template>
    <button class="transparentBtn">
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'BtnWithoutBg',
};
</script>

<style lang="sass" scoped>
.transparentBtn
  cursor: pointer
  padding: 10px 5px 5px
  background: transparent
  border: none
  color: #fff
  font-size: 18px
  border: none
  &:hover
    border-bottom: .3px #fff solid
</style>