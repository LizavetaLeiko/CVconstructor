<template>
  <div class="input__container">
    <label for="input" class="label">{{label}}</label>
    <input :value="modelValue" @input="updateInput" class="input" id="input" :type="type">
  </div>
</template>

<script>
export default {
  name: 'DefaultInput',
  props: {
    modelValue: [String, Number],
    type: {
      type: String,
      default: 'string'
    },
    label: {
      type: String,
    },
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  },

};
</script>

<style lang="sass" scoped>
.input__container
  color: #000
  display: flex
  flex-direction: column
  gap: 10px
.input
  padding: 10px
  outline: none
  border: 1px solid #000
  font-size: 18px
  width: 100%
  &:hover
    border: 1px solid #8f8f8f
  &:focus
    border: 1px solid #DADADA
.label
  font-size: 22px

</style>  