<template>
  <div class="container">
    <DefaultInput placeholder="Company's name"/>
    <DefaultInput placeholder="Role"/>
    <div class="container__date">
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

</style>