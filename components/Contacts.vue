<template>
  <div v-if="edit">
    <DefaultInput placeholder="Where" style="width: 30%;" v-model="contact[0]"/>
    <DefaultInput placeholder="Adress (phone number, nickname etc.) " v-model="contact[1]" />
  </div>
  <div v-else class="contacts__item">
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
  }
};
</script>

<style lang="sass" scoped>
div
  display: flex
  justify-content: flex-start
  align-items: center
  gap: 10px
span
  font-size: 18px
  font-weight: 300
.contacts__item
  display: grid
  grid-template-columns: 1fr 1fr
  width: 100%
</style>