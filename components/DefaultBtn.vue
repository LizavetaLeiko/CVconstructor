<template>
    <button class="btn">
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'DefaultBtn'
}
</script>

<style lang="sass" scoped>
.btn 
  cursor: pointer
  font-size: 18px
  max-width: 200px
  width: 100%
  padding: 15px
  background: #000
  border: 1px solid #fff
  color: #fff
  transform: scale(1) 
  &:hover
    transform: scale(1.05) 
    transition: all 0.3s ease-out

</style>