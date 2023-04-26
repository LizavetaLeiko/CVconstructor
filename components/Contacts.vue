<template>
  <div v-if="edit">
    <DefaultInput placeholder="Where" style="width: 30%;" :value="contact[0]"/>
    <DefaultInput placeholder="Adress (phone number, nickname etc. " :value="contact[0]" />
  </div>
  <div v-else>
    <span>{{contact[0]}}</span>
    <span>{{contact[1]}}</span>
  </div>
</template>

<script>
export default {
  name: 'Contacts',
  props:{
    edit: false,
    contact: [],
    // setValue: () =>{},
  }
};
</script>

<style lang="sass" scoped>
div
  display: flex
  justify-content: flex-start
  align-items: center
  gap: 10px
</style>