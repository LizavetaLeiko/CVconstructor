<template>
  <div class="container">
    <textarea :value="modelValue" @input="updateTextarea" rows='15' :placeholder="placeholder"/>
  </div>
</template>

<script>

export default {
  name: 'DefaultInput',
  props: {
    modelValue: [ String, String],
    placeholder: {
      type: String,
    },
  },
  methods: {
    updateTextarea(event) {
      this.$emit('update:modelValue', event.target.value)
    }
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