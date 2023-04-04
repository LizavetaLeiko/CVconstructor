<template>
  <div>
    <DefaultInput placeholder="Where" style="width: 30%;"/>
    <DefaultInput placeholder="Adress (phone number, nickname etc. "/>
  </div>
</template>

<script>
export default {
  name: 'Contacts',

};
</script>

<style lang="sass" scoped>
div
  display: flex
  justify-content: flex-start
  align-items: center
  gap: 10px
</style>