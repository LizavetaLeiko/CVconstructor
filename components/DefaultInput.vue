<template>
  <div class="container">
    <label v-if="label" class="label">{{label}}
    <input :value="modelValue" @input="setValue(e.target.value)" class="input"  :type="type" :placeholder="placeholder">
  </label>
  </div>
</template>

<script>

export default {
  name: 'DefaultInput',
  props: {
    modelValue: [String, String],
    value: [ String, Number, Array],
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
    },
    placeholder:{
      type: String,
    }
  },
  methods: {
    updateInput(event) {
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
  width: 100%

.input
  padding: 10px
  outline: none
  border: 1px solid #000
  font-size: 18px
  width: 100%
  opacity: 95%
  border-radius: 10px
  margin-top: 10px
  &:hover
    border: 1px solid #8f8f8f
  &:focus
    border: 1px solid #DADADA
.label
  font-size: 22px
</style>  