<template>
  <div class="place__container" v-if="edit">
    <DefaultInput placeholder="Company's name" :value="place.company"/>
    <DefaultInput placeholder="Your role" :value="place.role"/>
    <div class="place__container__date">
      <DefaultInput style="width: 15%;" placeholder="since" :value="place.date.since"/>
      <span>-</span>
      <DefaultInput style="width: 15%;" placeholder="for" :value="place.date.to"/>
    </div>
    <DefaultInput placeholder="Tecnologes" :value="place.techs"/>
    <DefaultTextarea placeholder="Description" :value="place.desc"/>
  </div>
  <div class="place__container" v-else>
    <p>{{place.company}}</p>
    <p>{{ place.role }}</p>
    <div v-if="place.date.since && place.date.to" class="place__container__date">
      <span>{{ place.date.since }}</span>
      <span>-</span>
      <span>{{ place.date.to }}</span>
    </div>
    <p v-if="place.techs">{{ place.techs }}</p>
    <p v-if="place.desc">{{ place.desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'WorkPlaceInfo',
  props:{
    edit: false,
    place: {
    }
  }
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