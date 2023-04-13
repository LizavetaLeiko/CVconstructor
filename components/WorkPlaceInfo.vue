<template>
  <div class="place__container">
    <DefaultInput placeholder="Company's name"/>
    <DefaultInput placeholder="Your role"/>
    <div class="place__container__date">
      <DefaultInput style="width: 15%;" placeholder="since"/>
      <span>-</span>
      <DefaultInput style="width: 15%;" placeholder="for"/>
    </div>
    <DefaultInput placeholder="Tecnologes"/>
    <DefaultTextarea placeholder="Description"/>
  </div>
</template>

<script>
export default {
  name: 'WorkPlaceInfo',
};
</script>

<style lang="sass" scoped>
.place__container
  padding: 10px 0
  border-top: 1px #fff solid
  border-bottom: 1px #fff solid
  gap: 20px
  display: flex
  justify-content: start
  flex-direction: column
  align-items: stretch
  &__date
    gap: 7px
    display: flex
    justify-content: start
    align-items: center

</style>