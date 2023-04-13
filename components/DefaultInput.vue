<template>
  <div v-if="isEditableStore.isEditable || forForm" class="container">
    <label v-if="label" for="input" class="label">{{label}}</label>
    <input :value="modelValue" @input="updateInput" class="input" id="input" :type="type" :placeholder="placeholder">
  </div>
  <div v-else class="container">
    <p class="display__p">{{modelValue}}</p>
  </div>
</template>

<script>
import { useIsEditableStore } from '~~/store/edit';

export default {
  name: 'DefaultInput',
  props: {
    modelValue: [String, String],
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
    },
    forForm:  {
      type: Boolean,
      default: false
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
  setup(){
    const isEditableStore = useIsEditableStore();
    return{
      isEditableStore
    }
  }
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
  &:hover
    border: 1px solid #8f8f8f
  &:focus
    border: 1px solid #DADADA
.label
  font-size: 22px
  margin-bottom: 10px
p
  font-size: 18px
</style>  