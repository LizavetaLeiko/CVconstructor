<template>
  <div class="tech__container" v-if="edit">
    <DefaultInput placeholder="Technology" :value="tech[0]"/>
    <DefaultTextarea placeholder="Describe yur exrepince with it" :value="tech[1]"/>
  </div>
  <div class="tech__container" v-else>
    <p>{{ tech[0] }}</p>
    <p>{{ tech[1] }}</p>
  </div>
</template>

<script>
export default {
  name: 'MoreAboutTech',
  props:{
    edit: false,
    tech: []
  }
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