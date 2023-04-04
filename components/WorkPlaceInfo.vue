<template>
  <div class="container">
    <DefaultInput placeholder="Company's name"/>
    <DefaultInput placeholder="Role"/>
    <div class="container__date">
      <DefaultInput placeholder="since"/>
      <span>-</span>
      <DefaultInput placeholder="for"/>
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

</style>