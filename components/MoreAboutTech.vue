<template>
  <div class="tech__container" v-if="edit">
    <DefaultInput placeholder="Technology" :value="tech ? tech[0] : null"/>
    <DefaultTextarea placeholder="Describe yur exrepince with it" :value="tech ? tech[1] : null"/>
  </div>
  <div class="tech__container" v-else>
    <p class="tech__title">{{ tech[0] }}</p>
    <p class="tech__desc">{{ tech[1] }}</p>
  </div>
</template>

<script>
export default {
  name: 'MoreAboutTech',
  props:{
    edit: false,
    tech: null,
  }
};
</script>

<style lang="sass" scoped>
.tech
  &__container
    gap: 10px
    display: flex
    justify-content: start
    flex-direction: column
    align-items: stretch
    padding: 15px 0
    border-top: 1px #fff solid
    border-bottom: 1px #fff solid
  &__title
    font-size: 20px
    font-weight: 400
  &__desc
    font-size: 18px
    font-weight: 300
</style>