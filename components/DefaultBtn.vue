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
  max-width: 150px
  width: 100%
  background: #fff
  border: 1px solid #000
  padding: 5px
  color: #000
  transform: scale(1) 
  display: flex
  align-items: center
  justify-content: center 
  &:hover
    transform: scale(1.05) 
    transition: all 0.3s ease-out

</style>