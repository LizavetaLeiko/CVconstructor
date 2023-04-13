<template>
  <div class="tech__container">
    <DefaultInput placeholder="Technology"/>
    <DefaultTextarea placeholder="Describe yur exrepince with it"/>
  </div>
</template>

<script>
export default {
  name: 'MoreAboutTech',
};
</script>

<style lang="sass" scoped>
.tech__container
  gap: 10px
  display: flex
  justify-content: start
  flex-direction: column
  align-items: stretch
  padding: 10px 0
  border-top: 1px #fff solid
  border-bottom: 1px #fff solid
</style>