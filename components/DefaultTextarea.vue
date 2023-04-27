<template>
  <div class="container">
    <textarea :value="value" @input="updateTextarea" rows="7" :placeholder="placeholder"/>
  </div>
</template>

<script>

export default {
  name: 'DefaultInput',
  props: {
    value: [ String, String],
    placeholder: {
      type: String,
    },
  },
};
</script>

<style lang="sass" scoped>
.container
  color: #000
  display: flex
  flex-direction: column
  gap: 10px
  width: 100%
textarea
  padding: 10px
  outline: none
  border: 1px solid #000
  font-size: 18px
  width: 100%
  resize: none
  opacity: 95%
  border-radius: 10px
  &:hover
    border: 1px solid #8f8f8f
  &:focus
    border: 1px solid #DADADA
</style>  