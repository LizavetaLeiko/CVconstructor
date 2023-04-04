<template>
  <div v-if="isEditble" class="container">
    <textarea :value="modelValue" @input="updateTextarea" rows="7" :placeholder="placeholder"/>
  </div>
  <div v-else >
    <p>{{modelValue}}</p>
  </div>
</template>

<script>
export default {
  name: 'DefaultInput',
  props: {
    modelValue: [String, String],
    placeholder: {
      type: String,
    },
  },
  methods: {
    updateTextarea(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  },
  computed: {
    ...mapState({
      isEditble: state => state.pages.isEditble,
    }),
  },
};
</script>

<style lang="sass" scoped>
.container
  color: #000
  display: flex
  flex-direction: column
  gap: 10px
textarea
  padding: 10px
  outline: none
  border: 1px solid #000
  font-size: 18px
  width: 100%
  resize: none
  &:hover
    border: 1px solid #8f8f8f
  &:focus
    border: 1px solid #DADADA
p
  font-size: 18px 
</style>  